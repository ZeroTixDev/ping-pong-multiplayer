'use strict';

module.exports = function State() {
   return {
      rooms: {},
      packRooms: function () {
         const data = {};
         for (const room of Object.values(this.rooms)) {
            data[room.id] = room.pack();
         }
         return data;
      },
      finishUpdating: function () {
         for (const room of Object.values(this.rooms)) {
            room.finishUpdate();
         }
      },
      get roomUpdated() {
         for (const room of Object.values(this.rooms)) {
            if (room.update) return true;
         }
         return false;
      },
   };
};
