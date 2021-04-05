'use strict';

module.exports = class Player {
   constructor(client) {
      // nothing so far
      this.id = client.id;
      this.name =
         client.username ||
         `Guest ${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`;
      this.ready = false;
   }
   pack() {
      return {
         name: this.name,
         id: this.id,
      };
   }
};
