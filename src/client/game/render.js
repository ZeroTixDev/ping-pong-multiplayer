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
      ctx.fillText(
         `${game.countdown <= 0 ? 'GO!' : window.debugMode ? game.countdown.toFixed(2) : Math.ceil(game.countdown)}`,
         canvas.width / 2,
         canvas.height / 4
      );
      drawVs({
         ctx,
         canvas,
         name1: Object.values(game.state().paddles).find((paddle) => paddle.x < canvas.width / 2)?.name,
         name2: Object.values(game.state().paddles).find((paddle) => paddle.x > canvas.width / 2)?.name,
         game,
      });
      ctx.globalAlpha = 1;
   }
   if (game.state() !== undefined) {
      drawBall(game, { ctx });
      drawPaddles(game, game.countdown <= 0, { ctx });
      drawScore(Object.values(game.state().scores)[0], Object.values(game.state().scores)[1], { ctx, canvas });
      if (game.onChat) {
         drawChat({ ctx, canvas });
      }
   }
};

// vs screen box with the names
function drawVs({ ctx, canvas, name1, name2, game }) {
   if (game.countdown <= 0) return;
   ctx.textAlign = 'center';
   ctx.textBaseline = 'middle';
   ctx.font = '55px Lexend';
   ctx.fillText(`${name1} vs ${name2}`, canvas.width / 2, canvas.height / 2 - 100);
}

function drawChat({ ctx, canvas }) {
   ctx.fillStyle = 'white';
   ctx.textAlign = 'center';
   ctx.textBaseline = 'middle';
   ctx.font = '32px Lexend';
   ctx.fillText(phraseText, canvas.width / 2, canvas.height - 40);
}

function drawScore(score1, score2, { ctx, canvas }) {
   ctx.fillStyle = 'white';
   ctx.font = '50px Lexend';
   ctx.textBaseline = 'middle';
   ctx.textAlign = 'center';
   ctx.fillText(` ${score1} - ${score2} `, canvas.width / 2, 50);
}

function drawBall(game, { ctx }) {
   const ball = game.renderState.ball;
   const actualBall = game.state().ball;
   ctx.fillStyle = '#DC9306';
   ctx.beginPath();
   ctx.arc(round(ball.x), round(ball.y), ball.radius, 0, Math.PI * 2);
   ctx.fill();
   if (window.debugMode) {
      ctx.fillStyle = 'red';
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(round(actualBall.x), round(actualBall.y), actualBall.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
   }
}

function drawPaddles(game, countdownEnded, { ctx }) {
   const paddles = game.renderState.paddles;
   const actualPaddles = game.state().paddles;
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
      if (window.debugMode) {
         ctx.fillStyle = 'red';
         ctx.globalAlpha = 0.5;
         const actualPaddle = actualPaddles[id];
         ctx.roundRect(
            round(actualPaddle.x - actualPaddle.width / 2),
            round(actualPaddle.y - actualPaddle.height / 2),
            round(actualPaddle.width),
            round(actualPaddle.height),
            5
         ).fill();
         ctx.globalAlpha = 1;
      }
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
CanvasRenderingContext2D.prototype.fillStroke = function () {
   this.fill();
   this.stroke();
};
