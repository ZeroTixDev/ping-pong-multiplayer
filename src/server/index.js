'use strict';

const path = require('path');
const express = require('express');
const WebSocket = require('ws');
const uniqueId = require('./util/uniqueId.js');
const Client = require('./client.js');
const Room = require('./room.js');

const wss = new WebSocket.Server({ noServer: true });
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`[Server]: Listening on ${PORT}`));

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
            if (clients[clientId].id === room.host) {
               removeRoom(room.id);
            }
         }
      }
      delete clients[clientId];
   });
});

setInterval(() => {
   if (!state.roomUpdate) return;
   const roomData = state.packRooms();
   for (const client of Object.values(clients)) {
      if (client.state === 'game-menu' && client.socket.readyState === WebSocket.OPEN) {
         client.send({ type: 'rooms', data: roomData });
      }
   }
   state.roomUpdate = false;
}, 2000);

function addRoom(data, id) {
   state.rooms[id] = new Room(data, id);
   state.roomUpdate = true;
   return state.rooms[id];
}

function removeRoom(id) {
   state.roomUpdate = true;
   delete state.rooms[id];
}

function newMessage({ data, id }) {
   const client = clients[id];
   console.log(data, data.type, 'client state', client.state);
   if (data.type === 'rooms' && client.state === 'connecting') {
      client.send({ type: 'rooms', data: state.packRooms() });
      client.inGameMenu(); // changes state to being in game menu
      console.log('sent room data');
   }
   if (data.type === 'join' && client.state === 'game-menu' && state.rooms[data.id] !== undefined) {
      const room = state.rooms[data.id];
      if (
         data.password !== undefined &&
         room.private &&
         room.playerCount + 1 <= room.maxPlayers &&
         data.password === room._password
      ) {
         console.log('player did right password');
         client.password = data.password;
         client.send({ type: 'password-right' });
      }
      if (data.password === undefined && room.playerCount + 1 <= room.maxPlayers) {
         if ((room.private && client.password !== null && client.password === room._password) || !room.private) {
            console.log('player joined lobby');
            room.addPlayer(client);
            client.enterGame(room.id);
            client.send({ type: 'success' });
         }
      }
   }
   if (data.type === 'create-room' && client.state === 'game-menu') {
      const room = addRoom({
         name: data.name,
         desc: data.desc,
         maxPlayers: 2,
         private: data.private,
         state: 'chat',
         password: data.password,
         host: client.id,
      });
      room.addPlayer(client);
      client.enterGame(room.id);
      client.send({ type: 'success' });
   }
}

function State() {
   return {
      rooms: {},
      packRooms: function () {
         const data = [];
         for (const room of Object.values(this.rooms)) {
            data.push(room.pack());
         }
         return data;
      },
      roomUpdate: true,
   };
}

addRoom(
   {
      name: 'Main lobby 1',
      desc: 'Play with randoms!',
      maxPlayers: 2,
      private: false,
      state: 'chat',
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
      state: 'chat',
      players: [],
   },
   uniqueId(Object.keys(state.rooms))
);

addRoom(
   {
      name: 'Testing room',
      desc: 'Dev Room Testing',
      maxPlayers: 2,
      state: 'chat',
      players: [],
      private: true,
      password: 'imagine',
   },
   uniqueId(Object.keys(state.rooms))
);

addRoom(
   {
      name: 'Noobs',
      desc: 'A lobby for noobs!',
      maxPlayers: 2,
      state: 'chat',
      players: [],
      private: false,
   },
   uniqueId(Object.keys(state.rooms))
);
