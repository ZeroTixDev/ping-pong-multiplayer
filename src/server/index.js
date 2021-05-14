'use strict';

const path = require('path');
const express = require('express');
const WebSocket = require('ws');
const uniqueId = require('./util/uniqueId.js');
const Client = require('./client.js');
const State = require('./state.js');
const Room = require('./room.js');
const Loop = require('accurate-game-loop');
// const { DateTime } = require('luxon');

const wss = new WebSocket.Server({ noServer: true });
const tickRate = 120;
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`[Server]: Listening on ${PORT} v2`));
console.log('server timezone offset', new Date().getTimezoneOffset());

app.get('/', (request, result) => {
   result.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.get('/shared/:fileName', (request, result) => {
   result.sendFile(path.join(__dirname, String('../shared/' + request.params.fileName)));
});

server.on('upgrade', (request, socket, head) => {
   wss.handleUpgrade(request, socket, head, (socket) => {
      wss.emit('connection', socket, request);
   });
});

app.use(express.static('dist'));

const clients = Object.create(null);

const state = State();

// global.dateTime = DateTime;
global.present = () => {
   // return global.dateTime.now().ts;
   return new Date().getTime();
};

// eslint-disable-next-line no-unused-vars
wss.on('connection', (socket, _request) => {
   const clientId = uniqueId(Object.keys(clients));
   clients[clientId] = new Client(clientId, socket);

   console.log('new client', clientId);

   socket.on('message', (data) => {
      try {
         newMessage({ data: JSON.parse(data), id: clientId });
      } catch (e) {
         console.log(e);
      }
   });

   socket.on('close', () => {
      console.log('client left', clientId);
      if (clients[clientId].state === 'in-game') {
         const room = state.rooms[clients[clientId].roomId];
         if (room !== undefined) {
            room.removePlayer(clientId);
         }
      }
      delete clients[clientId];
   });
});

// room update loop
new Loop(() => {
   RoomUpdate();
}, 10).start();
//game loop
new Loop(() => {
   Update();
   Send();
}, tickRate).start();

function RoomUpdate() {
   if (!state.roomChange && !state.roomUpdated) return;
   const roomData = state.packRooms();
   for (const client of Object.values(clients)) {
      if (client.socket.readyState === WebSocket.OPEN) {
         if (client.state === 'game-menu') {
            client.send({ type: 'rooms', data: Object.values(roomData) });
         }
         if (client.state === 'in-game' && state.rooms[client.roomId] && state.rooms[client.roomId].update) {
            client.send({ type: 'my-room-update', data: state.rooms[client.roomId].updatePack() });
         }
      }
   }
   state.finishUpdating();
   state.roomChange = false;
}

function Update() {
   for (const room of Object.values(state.rooms)) {
      room.updateRoom();
   }
}

function Send() {
   for (const room of Object.values(state.rooms)) {
      for (const player of Object.values(room.players)) {
         const client = clients[player.id];
         if (client.socket.readyState === WebSocket.OPEN) {
            room.send(client);
         }
      }
      room.resetAfterSend();
      if (room.toDelete) {
         removeRoom(room.id);
      }
   }
}

function addRoom(data, id) {
   state.rooms[id] = new Room(data, id);
   state.roomChange = true;
   return state.rooms[id];
}

function removeRoom(id) {
   state.roomChange = true;
   delete state.rooms[id];
}

function newMessage({ data, id }) {
   const client = clients[id];
   if (data.inputs === undefined && data.ping === undefined && data.type !== 'game-chat') {
      console.log(data, data.type, 'client state', client.state);
   }
   if (data.inputs !== undefined && client.state === 'in-game' && state.rooms[client.roomId] !== undefined) {
      state.rooms[client.roomId].handleInputs(data.inputs, client.id);
   }
   if (data.type === 'game-chat' && client.state === 'in-game' && state.rooms[client.roomId] !== undefined) {
      state.rooms[client.roomId].handleNumber(data.number, client.id);
   }
   if (data.type === 'rooms' && client.state === 'connecting') {
      client.send({ type: 'rooms', data: Object.values(state.packRooms()) });
      client.inGameMenu(); // changes state to being in game menu
      console.log('sent room data');
   }
   if (data.ping !== undefined) {
      client.send({ ping: data.ping });
   }
   if (data.type === 'leave-room' && client.state === 'in-game') {
      const room = state.rooms[client.roomId];
      if (room !== undefined) {
         room.removePlayer(client.id);
         if (client.id === room.host) {
            removeRoom(room.id);
         }
      }
      client.inConnecting(); // changes state to being in game menu
   }
   if (data.type === 'ready' && client.state === 'in-game') {
      state.rooms[client.roomId].ready(client.id);
   }
   if (data.type === 'chat' && client.state === 'in-game' && !whiteSpaceTest(data.content)) {
      state.rooms[client.roomId].talk(client.id, removeTags(data.content));
   }
   if (data.type === 'forfeit' && client.state === 'in-game') {
      state.rooms[client.roomId].forfeit(client.id);
   }
   if (data.type === 'join' && client.state === 'game-menu' && state.rooms[data.id] !== undefined) {
      const room = state.rooms[data.id];
      if (room === undefined) return;
      if (
         data.password !== undefined &&
         room.private &&
         room.playerCount + 1 <= room.maxPlayers &&
         data.password === room._password
      ) {
         console.log('player did right password');
         client.password = data.password;
         room.talk('SERVER', `${client.username} has joined!`);
         client.send({ type: 'password-right' });
      }
      if (data.password === undefined && room.playerCount + 1 <= room.maxPlayers && !whiteSpaceTest(data.username)) {
         if ((room.private && client.password !== null && client.password === room._password) || !room.private) {
            console.log('player joined lobby');
            client.username = removeTags(data.username) || '';
            room.addPlayer(client);
            client.enterGame(room.id);
            client.send({ type: 'success', selfId: client.id, initPack: room.initPack() });
         }
      }
   }
   if (data.type === 'create-room' && client.state === 'game-menu') {
      const room = addRoom({
         name: removeTags(data.name),
         desc: removeTags(data.desc),
         maxPlayers: 2,
         private: data.private,
         password: data.password,
         host: client.id,
      });
      client.username = removeTags(data.username) || '';
      room.addPlayer(client);
      client.enterGame(room.id);
      client.send({ type: 'success', selfId: client.id, initPack: room.initPack() });
   }
}

function removeTags(string) {
   return string.replace(/\>/g, '').replace(/\</g, '');
}

// function validRoomData(data) {
//    if (!whiteSpaceTest(data.name)) return false;
//    if (!whiteSpaceTest(data.desc)) return false;
//    return true;
// }

function whiteSpaceTest(string) {
   return /\S/.test(string) && /\u202E/.test(string);
}

addRoom(
   {
      name: 'Main lobby 1',
      desc: 'Play with randoms!',
      maxPlayers: 2,
      private: false,
      players: [],
   },
   uniqueId(Object.keys(state.rooms))
);

addRoom(
   {
      name: 'Main lobby 2',
      desc: 'Play with more randoms!',
      maxPlayers: 2,
      private: false,
      players: [],
   },
   uniqueId(Object.keys(state.rooms))
);

addRoom(
   {
      name: 'Noobs',
      desc: 'A lobby for noobs!',
      maxPlayers: 2,
      players: [],
      private: false,
   },
   uniqueId(Object.keys(state.rooms))
);

addRoom(
   {
      name: 'password is nothing',
      desc: 'there is no password haha',
      maxPlayers: 2,
      players: [],
      private: true,
      password: 'nothing',
   },
   uniqueId(Object.keys(state.rooms))
);
