'use strict';
const { CANVAS_WIDTH, CANVAS_HEIGHT } = require('../../shared/constants');

module.exports = function resize(elements, func = () => {}) {
   for (const element of elements) {
      if (element.width !== CANVAS_WIDTH) {
         element.width = CANVAS_WIDTH;
         element.style.width = `${CANVAS_WIDTH}px`;
      }
      if (element.height !== CANVAS_HEIGHT) {
         element.height = CANVAS_HEIGHT;
         element.style.height = `${CANVAS_HEIGHT}px`;
      }
      element.style.transform = `scale(${Math.min(
         window.innerWidth / CANVAS_WIDTH,
         window.innerHeight / CANVAS_HEIGHT
      )})`;
      element.style.left = `${(window.innerWidth - CANVAS_WIDTH) / 2}px`;
      element.style.top = `${(window.innerHeight - CANVAS_HEIGHT) / 2}px`;
   }
   func();
   return Math.min(window.innerWidth / CANVAS_WIDTH, window.innerHeight / CANVAS_HEIGHT);
};
