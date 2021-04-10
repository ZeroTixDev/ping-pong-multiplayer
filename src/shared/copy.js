'use strict';

// assumes no arrays, expects objects
module.exports = function copy(obj) {
   const object = Object.create(null);
   for (const key of Object.keys(obj)) {
      object[key] = typeof obj[key] === 'object' ? copy(obj[key]) : obj[key];
   }
   return object;
};
