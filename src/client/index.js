'use strict';

require('./style.css');

const ref = require('./references.js');
const hash = require('../shared/hash.js');
const typeWriter = require('./util/typeWriter.js');

let rooms = null;
let roomId = null;
let state = null; // THIS IS NULL

window.addEventListener('load', () => {
   handleNetworkRequestsAndText();
});

window.addEventListener('keydown', (event) => {
   if (state === 'chat' && document.activeElement !== ref.chatInput && event.code.toLowerCase() === 'enter') {
      ref.chatInput.focus();
   }
});

ref.createButton.addEventListener('mousedown', () => {
   ref.menu.classList.add('fade-out');
   ref.menu.classList.remove('fade-in');
   ref.menuMain.classList.add('fade-out');
   ref.menu.addEventListener('transitionend', () => {
      ref.menu.classList.remove('fade-out');
      ref.menuMain.classList.add('hidden');
      ref.menu.classList.add('fade-in');
      ref.menuMain.classList.remove('fade-out');
      ref.menuMain.classList.add('fade-in');
      ref.createMenu.classList.remove('hidden');
   });
});

ref.createRoomButton.addEventListener('mousedown', () => {
   send({
      type: 'create-room',
      name: ref.serverNameInput.value,
      desc: ref.serverDescInput.value,
      private: ref.privateCheckBox.checked,
      password: ref.serverPasswordInput.value,
   });
});

ref.privateCheckBox.addEventListener('click', () => {
   const showPrivateSection = ref.privateCheckBox.checked;
   if (showPrivateSection) {
      if (ref.passwordSection.classList.contains('hidden')) {
         ref.passwordSection.classList.remove('hidden');
      }
   } else {
      if (!ref.passwordSection.classList.contains('hidden')) {
         ref.passwordSection.classList.add('hidden');
      }
   }
});

ref.usernameBackButton.addEventListener('mousedown', () => {
   ref.usernameOverlay.classList.add('hidden');
   ref.usernameInput.value = '';
});

ref.privateBackButton.addEventListener('mousedown', () => {
   ref.privateOverlay.classList.add('hidden');
   ref.passwordInput.value = '';
});

ref.createBackButton.addEventListener('mousedown', () => {
   // reset create inputs
   ref.privateCheckBox.checked = false;
   ref.serverNameInput.value = '';
   ref.serverDescInput.value = '';
   ref.serverUsernameInput.value = '';
   ref.serverPasswordInput.value = '';
   // make fade effect
   ref.menu.classList.add('fade-out');
   ref.menu.classList.remove('fade-in');
   ref.createMenu.classList.add('fade-out');
   ref.menu.addEventListener('transitionend', () => {
      ref.menu.classList.remove('fade-out');
      ref.createMenu.classList.add('hidden');
      ref.menu.classList.add('fade-in');
      ref.createMenu.classList.remove('fade-out');
      ref.createMenu.classList.add('fade-in');
      ref.menuMain.classList.remove('hidden');
   });
});

function serverMessage(msg) {
   // console.log(msg);
   if (msg.type === 'rooms') {
      const roomData = msg.data;
      rooms = Object.create(null);
      ref.roomDiv.innerHTML = '';
      for (const room of roomData) {
         rooms[room.id] = room;
         ref.roomDiv.innerHTML += `
   			<div class="room" id="${room.id}">
					<span class="room-name">${room.name}${
            room.private ? '&nbsp;&nbsp;<span style="color: red;">[PRIVATE]</span>' : ''
         }</span>
					<span class="room-description">${room.desc}</span>
					<span class="room-player-count">${room.playerCount}/${room.maxPlayers}</span>
				</div>
   		`;
      }
      // attach listeners
      for (const room of roomData) {
         document.getElementById(`${room.id}`).addEventListener('mousedown', (event) => {
            event.preventDefault();
            if (room.private) {
               ref.privateOverlay.classList.remove('hidden');
               ref.passwordInput.focus();
               ref.passwordInput.addEventListener('keydown', (event) => {
                  if (event.key.toLowerCase() === 'enter' && /\S/.test(ref.passwordInput.value)) {
                     roomId = room.id;
                     send({ type: 'join', id: room.id, password: hash(ref.passwordInput.value) });
                     ref.passwordInput.value = '';
                  }
               });
            } else {
               ref.usernameOverlay.classList.remove('hidden');
               ref.usernameInput.focus();
               ref.usernameInput.addEventListener('keydown', (event) => {
                  if (event.key.toLowerCase() === 'enter' && /\S/.test(ref.usernameInput.value)) {
                     roomId = room.id;
                     send({ type: 'join', id: room.id, username: ref.usernameInput.value });
                     ref.usernameInput.value = '';
                  }
               });
            }
         });
      }
   }
   if (msg.type === 'password-right') {
      ref.privateOverlay.classList.add('hidden');
      ref.passwordInput.blur();
      ref.usernameOverlay.classList.remove('hidden');
      ref.usernameInput.focus();
      ref.usernameInput.addEventListener('keydown', (event) => {
         if (event.key.toLowerCase() === 'enter' && /\S/.test(ref.usernameInput.value)) {
            send({ type: 'join', id: roomId, username: ref.usernameInput.value });
            ref.usernameInput.value = '';
         }
      });
   }
   if (msg.type === 'success') {
      ref.menu.classList.add('hidden');
      ref.chat.classList.remove('hidden');
      state = 'chat';
      ref.chatInput.focus();
   }
}

async function handleNetworkRequestsAndText() {
   return new Promise(async (resolve, reject) => {
      await typeWriter('Connecting to server...', ref.connectionText);

      window.ws = new WebSocket(location.origin.replace(/^http/, 'ws'));

      window.ws.addEventListener('open', () => {
         window.socketStatus = 'success';
      });
      window.ws.addEventListener('error', () => {
         window.socketStatus = 'error';
         alert('The connection with the server has been lost');
      });

      window.ws.addEventListener('message', (msg) => {
         serverMessage(JSON.parse(msg.data));
      });

      window.send = (obj) => window.ws.send(JSON.stringify(obj));

      // check success
      let raf = null;
      new Promise((resolve, reject) => {
         let wrote = false;
         setTimeout(async () => {
            (async function run() {
               raf = requestAnimationFrame(run);
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
            const roomsWaitTime = 5;
            send({ type: 'rooms' });
            setTimeout(async () => {
               (async function check(now = 0) {
                  raf = requestAnimationFrame(check);
                  time += (now - lastTime) / 1000;
                  lastTime = now;
                  if (!wrote && rooms !== null) {
                     cancelAnimationFrame(raf);
                     wrote = true;
                     await typeWriter('Success!', ref.connectionText, 'span', 'style="color: #17e300;"');
                     resolve();
                     return;
                  }
                  if (!wrote && rooms === null && time >= roomsWaitTime) {
                     cancelAnimationFrame(raf);
                     wrote = true;
                     await typeWriter('Failed', ref.connectionText, 'span', 'style="color: red;"');
                     reject();
                  }
               })();
            }, 200);
         }).then(() => {
            ref.connectionText.innerHTML += '<br>';
            typeWriter('Fetching room data...', ref.connectionText).then(() => {
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
