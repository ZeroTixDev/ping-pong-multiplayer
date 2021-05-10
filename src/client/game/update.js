'use strict';

const ref = require('../references.js');
const canvas = ref.canvas;
const simulate = require('../../shared/simulate.js');
const copy = require('../../shared/copy.js');
const ctx = canvas.getContext('2d');
const { SIMULATION_RATE, SMOOTHING_RATE } = require('../../shared/constants.js');

module.exports = function Update(game) {
   // do something smart with game
   if (
      game === undefined ||
      game.startTime === undefined ||
      game.hasInitState === undefined ||
      game.hasInitInput === undefined
   ) {
      console.log('we dont have enough data to simulate the game');
      return { game, ctx, canvas };
   }

   const expectedTick = Math.ceil((Date.now() - game.startTime) / (1000 / SIMULATION_RATE));
   const delta = 1 / SIMULATION_RATE;

   const input = copy(window.currentInput);
   if (game.ticksSent === undefined) {
      game.ticksSent = {};
   }

   // if (!sameInput(input, copy(window.lastInput))) {
   //    send({
   //       inputs: [
   //          {
   //             tick: game.tick,
   //             input,
   //          },
   //       ],
   //    });
   //    game.inputs[game.tick][window.selfId] = input;
   // }

   // window.lastInput = copy(input);

   game.poll().forEach((data) => {
      if (game.inputs[data.tick] === undefined) {
         game.inputs[data.tick] = Object.create(null);
      }
      game.inputs[data.tick][data.id] = { ...game.inputs[data.tick][data.id], ...data.input };
      game.tick = Math.min(game.tick, data.tick);
   });
   game.pendingInputs = [];

   const inputPackages = [];
   console.log('inside update fn');

   while (game.tick < expectedTick) {
      let onCountdown = false;
      if (game.countdown !== undefined) {
         if (game.countdown > 0) {
            game.countdown -= delta;
            onCountdown = game.countdown > 0;
         } else {
            game.countdown = 0;
            game.countdownAlpha -= delta;
         }
         console.log('updating countdown');
      } else {
         console.log('game.countdown undefined ?', game.countdown);
      }
      if (!onCountdown) {
         game.states[game.tick + 1] = simulate(game.states[game.tick], game.inputs[game.tick]);
         if (game.inputs[game.tick + 1] === undefined) {
            game.inputs[game.tick + 1] = Object.create(null);
         }
         if (game.ticksSent[game.tick + 1] === undefined) {
            game.inputs[game.tick + 1][window.selfId] = input;
            inputPackages.push({ tick: game.tick + 1, input });
            game.ticksSent[game.tick + 1] = true;
         }
      } else {
         game.states[game.tick + 1] = copy(game.states[game.tick]);
         game.inputs[game.tick + 1] = copy(game.inputs[game.tick]);
      }
      game.tick++;
   }

   if (inputPackages.length > 0) {
      send({
         inputs: [...inputPackages],
      });
   }

   game.pendingChats.forEach((data) => {
      game.inputs[game.tick][data.id] = { number: data.number, ...game.inputs[game.tick][data.id] };
   });

   game.pendingChats = [];

   // smoothing

   const realDelta = (window.performance.now() - game.lastTime) / 1000;
   game.lastTime = window.performance.now();

   const lerpTime = Math.min(realDelta * SMOOTHING_RATE, 1);
   game.renderState.ball.x = lerp(game.renderState.ball.x, game.state().ball.x, lerpTime);
   game.renderState.ball.y = lerp(game.renderState.ball.y, game.state().ball.y, lerpTime);

   for (const id of Object.keys(game.renderState.paddles)) {
      const paddle = game.renderState.paddles[id];
      const realPaddle = copy(game.state().paddles[id]);
      paddle.x = lerp(paddle.x, realPaddle.x, lerpTime);
      paddle.y = lerp(paddle.y, realPaddle.y, lerpTime);
      paddle.width = lerp(paddle.width, realPaddle.width, lerpTime * 0.2);
      paddle.height = lerp(paddle.height, realPaddle.height, lerpTime * 0.2);
      paddle.text = realPaddle.text;
      paddle.textOpacity = realPaddle.textOpacity;
   }
   game.renderState.ball.radius = lerp(game.renderState.ball.radius, game.state().ball.radius, lerpTime * 0.2);

   return { game, ctx, canvas };
};

// function sameInput(input1, input2) {
//    return input1.up === input2.up && input1.down === input2.down;
// }

function lerp(start, end, time) {
   return start * (1 - time) + end * time;
}
