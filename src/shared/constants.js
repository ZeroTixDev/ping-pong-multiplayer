'use strict';

module.exports = {
   TYPING_SPEED: 40,
   CANVAS_WIDTH: 1600,
   CANVAS_HEIGHT: 900,
   COUNTDOWN: 3,
   SIMULATION_RATE: 120,
   PADDLE_FRICTION: 0.89,
   SPEED: 90,
   BALL_MAX_SPEED: 1000,
   INPUT_DECAY: 0.96,
   POINTS_TO_WIN: 3,
   SMOOTHING_RATE: 15,
   phrases: {
      1: 'Wow!',
      2: 'Close one!',
      3: 'Hahahaha',
      4: 'Okay.',
      5: 'Gotta go!',
      6: 'Thanks!',
      7: 'I give up',
      8: 'You suck',
      9: 'Luck.',
   },
   controls: {
      KeyW: { movement: true, name: 'up' },
      ArrowUp: { movement: true, name: 'up' },
      KeyS: { movement: true, name: 'down' },
      ArrowDown: { movement: true, name: 'down' },
      KeyO: { forfeit: true },
      KeyF: { gamechat: true },
      Digit1: { gameChatDigit: 1 },
      Digit2: { gameChatDigit: 2 },
      Digit3: { gameChatDigit: 3 },
      Digit4: { gameChatDigit: 4 },
      Digit5: { gameChatDigit: 5 },
      Digit6: { gameChatDigit: 6 },
      Digit7: { gameChatDigit: 7 },
      Digit8: { gameChatDigit: 8 },
      Digit9: { gameChatDigit: 9 },
   },
};
