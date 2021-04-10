'use strict';

const ref = require('../references.js');
const canvas = ref.canvas;
const ctx = canvas.getContext('2d');
const { SIMULATION_RATE } = require('../../shared/constants.js');

module.exports = function Update(game) {
   // do something smart with game
   if (game === undefined || game.startTime === undefined) return { game, ctx, canvas };

   const expectedTick = Math.ceil((Date.now() - game.startTime) / (1000 / SIMULATION_RATE));
   const delta = 1 / SIMULATION_RATE;

   while (game.tick < expectedTick) {
      if (game.countdown !== undefined) {
         if (game.countdown > 0) {
            game.countdown -= delta;
         } else {
            game.countdown = 0;
            game.countdownAlpha -= delta;
         }
      }
      game.tick++;
   }

   return { game, ctx, canvas };
};
