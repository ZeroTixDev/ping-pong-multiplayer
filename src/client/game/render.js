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
      drawPaddles(Object.values(game.renderState.paddles), { ctx });
   }
};

function drawBall(ball, { ctx }) {
   ctx.fillStyle = '#DC9306';
   ctx.beginPath();
   ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
   ctx.fill();
}

function drawPaddles(paddles, { ctx }) {
   ctx.fillStyle = '#14cccc';
   for (let i = 0; i < paddles.length; i++) {
      const paddle = paddles[i];
      ctx.fillRect(paddle.x - paddle.width / 2, paddle.y - paddle.height / 2, paddle.width, paddle.height);
   }
}
