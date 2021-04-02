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
      this.state = null;
      this.players = {};
   }
   get playerCount() {
      return Object.keys(this.players).length;
   }
   addPlayer(client) {
      this.players[client.id] = new Player();
   }
   removePlayer(id) {
      delete this.players[id];
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
