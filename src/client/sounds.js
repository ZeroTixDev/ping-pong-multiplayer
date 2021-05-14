'use strict';

module.exports = {
   loadSound: function (path) {
      const audio = new Audio();
      audio.src = require('../../assets/sounds/' + String(path)).default;
      return audio;
   },
};
