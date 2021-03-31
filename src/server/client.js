'use strict';

module.exports = class Client {
   constructor(id, socket) {
      this.id = id;
      this.socket = socket;
      this.state = 'connecting';
      /* possible states
			- connecting
			- game-menu
			- in-game
      */
   }
   inGameMenu() {
      this.state = 'game-menu';
   }
   enterGame(id) {
      this.state = 'in-game';
      this.roomId = id;
   }
   send(data) {
      this.socket.send(JSON.stringify(data));
   }
};
