'use strict';

module.exports = {
   TYPING_SPEED: 40,
   CANVAS_WIDTH: 1600,
   CANVAS_HEIGHT: 900,
   COUNTDOWN: 3,
   SIMULATION_RATE: 60,
   PADDLE_FRICTION: 0.91,
   SPEED: 80,
   BALL_MAX_SPEED: 1000,
   INPUT_DECAY: 0.5,
   controls: {
      KeyW: { movement: true, name: 'up' },
      ArrowUp: { movement: true, name: 'up' },
      KeyS: { movement: true, name: 'down' },
      ArrowDown: { movement: true, name: 'down' },
   },
};
