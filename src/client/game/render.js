'use strict';

const round = (value) => Math.round(value);
const { phrases } = require('../../shared/constants.js');

let phraseText = '';
for (const [number, text] of Object.entries(phrases)) {
   phraseText += ` ${number}. ${text} `;
}

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
   if (game.state() !== undefined) {
      drawBall(game.renderState.ball, { ctx });
      drawPaddles(game.renderState.paddles, game.countdown <= 0, { ctx });
      drawScore(Object.values(game.state().scores)[0], Object.values(game.state().scores)[1], { ctx, canvas });
      if (game.onChat) {
         drawChat({ ctx, canvas });
      }
   }
};

function drawChat({ ctx, canvas }) {
   ctx.fillStyle = 'white';
   ctx.textAlign = 'center';
   ctx.textBaseline = 'middle';
   ctx.font = '40px Lexend';
   ctx.fillText(phraseText, canvas.width / 2, canvas.height - 40);
}

function drawScore(score1, score2, { ctx, canvas }) {
   ctx.fillStyle = 'white';
   ctx.font = '50px Lexend';
   ctx.textBaseline = 'middle';
   ctx.textAlign = 'center';
   ctx.fillText(` ${score1} - ${score2} `, canvas.width / 2, 50);
}

function drawBall(ball, { ctx }) {
   ctx.fillStyle = '#DC9306';
   ctx.beginPath();
   ctx.arc(round(ball.x), round(ball.y), ball.radius, 0, Math.PI * 2);
   ctx.fill();
}

function drawPaddles(paddles, countdownEnded, { ctx }) {
   ctx.fillStyle = '#14cccc';
   for (const id of Object.keys(paddles)) {
      const paddle = paddles[id];
      ctx.fillStyle = '#14cccc';
      ctx.roundRect(
         round(paddle.x - paddle.width / 2),
         round(paddle.y - paddle.height / 2),
         round(paddle.width),
         round(paddle.height),
         5
      ).fill();
      if (paddle.text !== undefined) {
         ctx.textAlign = 'center';
         ctx.textBaseline = 'middle';
         ctx.font = '40px Lexend';
         ctx.fillText(paddle.text, round(paddle.x), round(paddle.y - paddle.height / 2 - 45));
      }
      if (id === window.selfId && !countdownEnded) {
         ctx.fillStyle = 'white';
         ctx.beginPath();
         ctx.arc(round(paddle.x), round(paddle.y - paddle.height / 2 - 15), 10, 0, Math.PI * 2);
         ctx.fill();
      }
   }
}

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
   if (w < 2 * r) r = w / 2;
   if (h < 2 * r) r = h / 2;
   this.beginPath();
   this.moveTo(x + r, y);
   this.arcTo(x + w, y, x + w, y + h, r);
   this.arcTo(x + w, y + h, x, y + h, r);
   this.arcTo(x, y + h, x, y, r);
   this.arcTo(x, y, x + w, y, r);
   this.closePath();
   return this;
};
