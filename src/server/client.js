'use strict';

module.exports = class Client {
   constructor(id, socket) {
      this.id = id;
      this.socket = socket;
      this.state = 'connecting';
      this.password = null;
      /* possible states
			- connecting
			- game-menu
			- in-game
      */
   }
   inGameMenu() {
      this.state = 'game-menu';
   }
   inConnecting() {
      this.state = 'connecting';
   }
   enterGame(id) {
      this.state = 'in-game';
      this.roomId = id;
   }
   send(data) {
      this.socket.send(JSON.stringify(data));
   }
};
