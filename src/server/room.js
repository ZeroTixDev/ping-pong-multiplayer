'use strict';

const Player = require('./player.js');
const hash = require('../shared/hash.js');

module.exports = class Room {
   constructor(data, id) {
      this.id = id;
      this.name = data.name;
      this.desc = data.desc;
      this.host = data.host || null;
      this.private = data.private || false;
      this.maxPlayers = data.maxPlayers;
      this._password = this.private ? hash(data.password) : null;
      this.state = 'chat';
      this.players = {};
      this.readyCount = 0;
      this.countdown = 3;
      this.pendingChatMessages = []; // [{ author: string, content: string }]
      this.update = false;
      this.sendPackage = {};
   }
   get playerCount() {
      return Object.keys(this.players).length;
   }
   get sentAllMessages() {
      return !(this.pendingChatMessages.length > 0);
   }
   talk(playerId, content) {
      this.pendingChatMessages.push({ author: playerId, content });
   }
   ready(playerId) {
      if (!this.players[playerId].ready) {
         this.readyCount++;
         this.update = true;
      }
      this.players[playerId].ready = true;
   }
   send(client) {
      if (!this.sentAllMessages) {
         client.send({ type: 'chat-update', messages: [...this.pendingChatMessages] });
      }
      if (Object.keys(this.sendPackage).length > 0) {
         client.send({ ...this.sendPackage });
      }
   }
   resetAfterSend() {
      this.pendingChatMessages = [];
      this.sendPackage = {};
   }
   updateRoom() {
      // idk maybe do some room updating
      if (this.readyCount === this.maxPlayers && this.state !== 'game') {
         this.state = 'game';
         this.countdown = 3;
         this.sendPackage['change'] = 'game';
         this.sendPackage['countdown'] = true;
      }
   }
   addPlayer(client) {
      this.update = true;
      this.players[client.id] = new Player(client);
      this.talk('SERVER', `${client.username} has joined!`);
   }
   initPack() {
      return {
         room: {
            name: this.name,
            private: this.private,
         },
         readyCount: this.readyCount,
         players: this.playerPack,
         maxPlayers: this.maxPlayers,
         playerCount: this.playerCount,
      };
   }
   updatePack() {
      return {
         room: {
            name: this.name,
         },
         readyCount: this.readyCount,
         players: this.playerPack,
         playerCount: this.playerCount,
         maxPlayers: this.maxPlayers,
      };
   }
   get playerPack() {
      const pack = {};
      for (const player of Object.values(this.players)) {
         pack[player.id] = player.pack();
      }
      return pack;
   }
   removePlayer(id) {
      this.update = true;
      if (this.players[id].ready) {
         this.readyCount--;
      }
      if (this.readyCount !== this.maxPlayers && this.state === 'game') {
         this.state = 'chat';
         this.sendPackage['change'] = 'chat';
         this.readyCount = 0;
         for (const player of Object.values(this.players)) {
            player.ready = false;
         }
      }
      this.talk('SERVER', `${this.players[id].name} has left the game!`);
      delete this.players[id];
   }
   forfeit(id) {
      this.update = true;
      this.state = 'chat';
      this.sendPackage['change'] = 'chat';
      this.readyCount = 0;
      for (const player of Object.values(this.players)) {
         player.ready = false;
      }
      this.talk('SERVER', `${this.players[id].name} has forfeited! What a noob`);
   }
   finishUpdate() {
      this.update = false;
   }
   pack() {
      return {
         id: this.id,
         name: this.name,
         desc: this.desc,
         private: this.private,
         maxPlayers: this.maxPlayers,
         playerCount: this.playerCount,
      };
   }
};

/*
id: {
	name: string,
	desc: string,
	maxPlayers: number,
	private: bool,
	_password: string,
	state: string,
	...stateData,}
*/
