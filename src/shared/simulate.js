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
   phrases,
} = require('./constants.js');

function intersectRectCircle(rect, circle) {
   const cx = Math.abs(circle.x - rect.x);
   const xDist = rect.width / 2 + circle.radius;
   if (cx > xDist) return false;
   const cy = Math.abs(circle.y - rect.y);
   const yDist = rect.height / 2 + circle.radius;
   if (cy > yDist) return false;
   if (cx <= rect.width / 2 || cy <= rect.height / 2) return true;
   const xCornerDist = cx - rect.width / 2;
   const yCornerDist = cy - rect.height / 2;
   const xCornerDistSq = xCornerDist * xCornerDist;
   const yCornerDistSq = yCornerDist * yCornerDist;
   const maxCornerDistSq = circle.radius * circle.radius;
   return xCornerDistSq + yCornerDistSq <= maxCornerDistSq;
}

module.exports = function simulate(oldState, inputs) {
   const state = copy(oldState);
   const delta = 1 / SIMULATION_RATE;

   state.won = false;
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

   if (state.ball.y - state.ball.radius < 0 || state.ball.y + state.ball.radius > CANVAS_HEIGHT) {
      state.ball.yv *= -1;
   }

   for (const paddleId of Object.keys(state.paddles)) {
      const paddle = state.paddles[paddleId];
      if (paddle === undefined) continue;
      let input = inputs[paddleId];
      if (input !== undefined) {
         paddle.lastInput = {};
         paddle.lastInput.up = input.up;
         paddle.lastInput.down = input.down;
      } else if (input === undefined || input.up === undefined || input.down === undefined) {
         if (paddle.lastInput !== undefined) {
            paddle.lastInput.up *= INPUT_DECAY;
            paddle.lastInput.down *= INPUT_DECAY;
            input = {};
            input.up = paddle.lastInput.up;
            input.down = paddle.lastInput.down;
         }
      }
      if (input !== undefined) {
         if (input.up) {
            paddle.accel.y -= SPEED * delta * input.up;
         }
         if (input.down) {
            paddle.accel.y += SPEED * delta * input.down;
         }
         if (input.number) {
            paddle.text = phrases[input.number];
            paddle.textOpacity = 2;
         }
      }
      if (paddle.text !== undefined) {
         paddle.textOpacity -= delta;
         if (paddle.textOpacity <= 0) {
            paddle.text = undefined;
         }
      }
      paddle.accel.y *= Math.pow(PADDLE_FRICTION, delta * 20);
      paddle.y += paddle.accel.y * 20 * delta;
      paddle.height += 2 * delta;
      if (paddle.y > CANVAS_HEIGHT - paddle.height / 2) {
         paddle.y = CANVAS_HEIGHT - paddle.height / 2;
         paddle.accel.x = 0;
      }
      if (paddle.y - paddle.height / 2 < 0) {
         paddle.y = paddle.height / 2;
         paddle.accel.y = 0;
      }
      if (intersectRectCircle(paddle, state.ball)) {
         const dist = ((paddle.y - state.ball.y) / paddle.height) * 100;
         state.ball.yv += dist * -4; // here's the trick
         state.ball.xv *= -1.08;
         paddle.height -= 50;
         if (paddle.height < paddle.width) {
            paddle.height = paddle.width;
         }
      }
      // its not 0 because i want the prevent fake wins as much as possible ()
      if (
         (paddle.x < CANVAS_WIDTH / 2 && state.ball.x + state.ball.radius < -500) ||
         (paddle.x > CANVAS_WIDTH / 2 && state.ball.x + state.ball.radius > CANVAS_WIDTH + 500)
      ) {
         state.won = true;
         const otherPaddleId = Object.keys(state.scores).find((id) => id !== paddleId);
         state.scores[otherPaddleId]++;
         state.ball.x = CANVAS_WIDTH / 2;
         state.ball.y = CANVAS_HEIGHT / 2;
         if (state.ball.x + state.ball.radius < -500) {
            state.ball.xv = state.ball.speed * 0.6;
         }
         if (state.ball.x + state.ball.radius > CANVAS_WIDTH + 500) {
            state.ball.xv = -state.ball.speed * 0.6;
         }
         for (const paddle of Object.values(state.paddles)) {
            // paddle.y = CANVAS_HEIGHT / 2;
            // paddle.accel = { x: 0, y: 0 };
            paddle.height = 300;
            paddle.lastInput = { up: false, down: false };
         }
         break;
      }
   }

   return state;
};
