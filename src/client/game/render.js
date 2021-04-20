'use strict';

module.exports = function Render({ game, ctx, canvas }) {
   ctx.fillStyle = '#202130';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   if (game === undefined) return;
   if (game.countdown !== undefined || game.countdownAlpha + 0.5 <= 0) {
      ctx.fillStyle = 'white';
      ctx.font = `65px Lexend`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.globalAlpha = Math.max(0, game.countdownAlpha + 0.5);
      ctx.fillText(`${game.countdown <= 0 ? 'GO!' : Math.ceil(game.countdown)}`, canvas.width / 2, canvas.height / 4);
      ctx.globalAlpha = 1;
   }
   if (game.state !== undefined) {
      drawBall(game.renderState.ball, { ctx });
      drawPaddles(game.renderState.paddles, game.countdown <= 0, { ctx });
   }
};

function drawBall(ball, { ctx }) {
   ctx.fillStyle = '#DC9306';
   ctx.beginPath();
   ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
   ctx.fill();
}

function drawPaddles(paddles, countdownEnded, { ctx }) {
   ctx.fillStyle = '#14cccc';
   for (const id of Object.keys(paddles)) {
      const paddle = paddles[id];
      ctx.fillStyle = '#14cccc';
      ctx.fillRect(paddle.x - paddle.width / 2, paddle.y - paddle.height / 2, paddle.width, paddle.height);
      if (id === window.selfId && !countdownEnded) {
         ctx.fillStyle = 'white';
         ctx.beginPath();
         ctx.arc(paddle.x, paddle.y - paddle.height / 2 - 20, 10, 0, Math.PI * 2);
         ctx.fill();
      }
   }
}
