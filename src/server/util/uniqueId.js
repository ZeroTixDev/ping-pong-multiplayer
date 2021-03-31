'use strict';

const uuid = require('uuid');

function generateId() {
   return uuid.v4().slice(0, 4);
}

module.exports = function uniqueId(array) {
   let id = generateId();
   let unique = true;
   for (let i = 0; i < array.length; i++) {
      if (id === array[i]) {
         unique = false;
      }
   }
   while (!unique) {
      id = generateId();
      let same = false;
      for (let i = 0; i < array.length; i++) {
         if (id === array[i]) {
            same = true;
         }
      }
      unique = !same;
   }
   return id;
};
