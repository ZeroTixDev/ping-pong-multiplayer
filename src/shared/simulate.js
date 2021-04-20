'use strict';

const copy = require('./copy.js');
const {
   SPEED,
   SIMULATION_RATE,
   CANVAS_HEIGHT,
   CANVAS_WIDTH,
   PADDLE_FRICTION,
   BALL_MAX_SPEED,
   INPUT_DECAY,
} = require('./constants.js');

module.exports = function simulate(oldState, inputs) {
   const state = copy(oldState);
   const delta = 1 / SIMULATION_RATE;

   if (state.ball.xv === undefined) {
      state.ball.xv = 600;
   }
   if (state.ball.yv === undefined) {
      state.ball.yv = -300;
   }

   if (state.ball.xv > BALL_MAX_SPEED) {
      state.ball.xv = BALL_MAX_SPEED;
   }
   if (state.ball.xv < -BALL_MAX_SPEED) {
      state.ball.xv = -BALL_MAX_SPEED;
   }
   if (state.ball.yv > BALL_MAX_SPEED) {
      state.ball.yv = BALL_MAX_SPEED;
   }
   if (state.ball.yv < -BALL_MAX_SPEED) {
      state.ball.yv = -BALL_MAX_SPEED;
   }
   state.ball.x += state.ball.xv * delta;
   state.ball.y += state.ball.yv * delta;

   if (state.ball.x - state.ball.radius < 0 || state.ball.x + state.ball.radius > CANVAS_WIDTH) {
      state.ball.xv *= -1;
   }
   if (state.ball.y - state.ball.radius < 0 || state.ball.y + state.ball.radius > CANVAS_HEIGHT) {
      state.ball.yv *= -1;
   }

   for (const paddleId of Object.keys(state.paddles)) {
      const paddle = state.paddles[paddleId];
      if (paddle === undefined) continue;
      if (paddle.accel === undefined) {
         paddle.accel = { x: 0, y: 0 };
      }
      let input = inputs[paddleId];
      if (input !== undefined) {
         paddle.lastInput = copy(input);
      } else if (input === undefined) {
         if (paddle.lastInput !== undefined) {
            paddle.lastInput.up *= INPUT_DECAY;
            paddle.lastInput.down *= INPUT_DECAY;
            input = copy(paddle.lastInput);
         }
      }
      if (input !== undefined) {
         if (input.up) {
            paddle.accel.y -= SPEED * delta * input.up;
         }
         if (input.down) {
            paddle.accel.y += SPEED * delta * input.down;
         }
      }
      paddle.accel.y *= Math.pow(PADDLE_FRICTION, delta * 20);
      paddle.y += paddle.accel.y * 20 * delta;
      if (paddle.y > CANVAS_HEIGHT - paddle.height / 2) {
         paddle.y = CANVAS_HEIGHT - paddle.height / 2;
         paddle.accel.x = 0;
      }
      if (paddle.y - paddle.height / 2 < 0) {
         paddle.y = paddle.height / 2;
         paddle.accel.y = 0;
      }
      if (state.ball.x < CANVAS_WIDTH / 2) {
         if (
            state.ball.x - state.ball.radius < paddle.x + paddle.width / 2 &&
            state.ball.x + state.ball.radius > paddle.x - paddle.width / 2 &&
            state.ball.y - state.ball.radius < paddle.y + paddle.height / 2 &&
            state.ball.y + state.ball.radius > paddle.y - paddle.height / 2
         ) {
            state.ball.xv *= -1.03;
            paddle.height -= 25;
            if (paddle.height < 100) {
               paddle.height = 100;
            }
            state.ball.x = paddle.x + paddle.width / 2 + state.ball.radius;
         }
      } else {
         if (
            state.ball.x + state.ball.radius > paddle.x - paddle.width / 2 &&
            state.ball.x - state.ball.radius < paddle.x + paddle.width / 2 &&
            state.ball.y - state.ball.radius < paddle.y + paddle.height / 2 &&
            state.ball.y + state.ball.radius > paddle.y - paddle.height / 2
         ) {
            state.ball.xv *= -1.03;
            paddle.height -= 25;
            if (paddle.height < 100) {
               paddle.height = 100;
            }
            state.ball.x = paddle.x - paddle.width / 2 - state.ball.radius;
         }
      }
   }
   // if (state.ball.x - state.ball.radius <= 0) {
   //    state.ball.x = CANVAS_WIDTH / 2;
   //    state.ball.y = CANVAS_HEIGHT / 2;
   //    state.ball.xv = 100;
   //    state.ball.yv = -200;
   // }
   // if (state.ball.x + state.ball.radius >= CANVAS_WIDTH) {
   // 	state.ball.x = CANVAS_WIDTH / 2;
   //    state.ball.y = CANVAS_HEIGHT / 2;
   //    state.ball.xv = -100;
   //    state.ball.yv = -200;
   // }

   return state;
};
