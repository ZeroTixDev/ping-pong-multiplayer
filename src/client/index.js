'use strict';

require('./style.css');

const ref = require('./references.js');
const typingSpeed = 50;
const gameDataWaitTime = 10;
const gameData = {};

window.addEventListener('load', () => {
   handleNetworkRequestsAndText();
});

async function handleNetworkRequestsAndText() {
   return new Promise(async (resolve, reject) => {
      await typeWriter('Connecting to server...', ref.connectionText);

      window.ws = new WebSocket(location.origin.replace(/^http/, 'ws'));

      window.ws.addEventListener('open', () => {
         window.socketStatus = 'success';
      });
      window.ws.addEventListener('error', () => {
         window.socketStatus = 'error';
      });

      // check success
      let raf = null;
      new Promise((resolve, reject) => {
         let wrote = false;
         setTimeout(async () => {
            (async function run() {
               if (window.socketStatus != null) {
                  cancelAnimationFrame(raf);
                  if (!wrote && window.socketStatus === 'success') {
                     wrote = true;
                     await typeWriter('Success!', ref.connectionText, 'span', 'style="color: #17e300;"');
                     resolve();
                  } else if (!wrote && window.socketStatus === 'error') {
                     wrote = true;
                     await typeWriter('Failed', ref.connectionText, 'span', 'style="color: red;"');
                     reject();
                  }
               }
               raf = requestAnimationFrame(run);
            })();
         }, 200);
      }).then(() => {
         new Promise(async (resolve, reject) => {
            ref.connectionText.innerHTML += '<br>';
            await typeWriter('Loading Game Data....', ref.connectionText);
            raf = null;
            let time = 0;
            let lastTime = 0;
            let wrote = false;
            setTimeout(async () => {
               (async function run(now = 0) {
                  time += (now - lastTime) / 1000;
                  lastTime = now;
                  if (!wrote && gameData != null) {
                     cancelAnimationFrame(raf);
                     wrote = true;
                     await typeWriter('Success!', ref.connectionText, 'span', 'style="color: #17e300;"');
                     resolve();
                     return;
                  } else if (!wrote && gameData == null && time >= gameDataWaitTime) {
                     cancelAnimationFrame(raf);
                     wrote = true;
                     await typeWriter('Failed', ref.connectionText, 'span', 'style="color: red;"');
                     reject();
                  }
                  raf = requestAnimationFrame(run);
               })();
            }, 200);
         }).then(() => {
            ref.connectionText.innerHTML += '<br>';
            typeWriter('Hacking haha0201 [JUST KIDDING] ...', ref.connectionText).then(() => {
               typeWriter('Success!', ref.connectionText, 'span', 'style="color: #17e300;"');
               ref.loading.classList.add('fade-out');
               ref.loading.addEventListener('transitionend', () => {
                  ref.loading.classList.add('hidden');
                  ref.menu.classList.remove('hidden');
               });
            });
         });
      });
   });
}

async function typeWriter(text, element, elementType = null, styles = null) {
   return new Promise((resolve, _reject) => {
      function type(i = 0) {
         if (i < text.length) {
            if (elementType != null) {
               element.innerHTML += `<${elementType} ${styles == null ? '' : styles}>${text.charAt(
                  i
               )}</${elementType}>`;
            } else {
               element.innerHTML += text.charAt(i);
            }
            setTimeout(() => type(i + 1), 1000 / typingSpeed);
         } else {
            resolve();
         }
      }
      type();
   });
}
