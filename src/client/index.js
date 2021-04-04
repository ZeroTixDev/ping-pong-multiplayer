'use strict';

require('./style.css');

const ref = require('./references.js');
const hash = require('../shared/hash.js');
const typeWriter = require('./util/typeWriter.js');

let rooms = null;
let roomId = null;
let selfId = null;
let game = null;
let state = null; // THIS IS NULL

window.addEventListener('load', () => {
   handleNetworkRequestsAndText();
});

window.addEventListener('keydown', (event) => {
   if (state === 'chat' && document.activeElement !== ref.chatInput && event.code.toLowerCase() === 'enter') {
      ref.chatInput.focus();
   }
});

ref.chatInput.addEventListener('keydown', (event) => {
   if (state !== 'chat') return ref.chatInput.blur();
   if (event.key.toLowerCase() === 'enter' && /\S/.test(ref.chatInput.value)) {
      // send to server
      send({ type: 'chat', content: ref.chatInput.value });
      ref.chatInput.value = '';
   }
});

ref.leaveButton.addEventListener('mousedown', () => {
   console.log('clicked leave, state ->', state);
   if (state === 'chat') {
      console.log('requesting to leave');
      send({ type: 'leave-room' });
      ref.chatMessages.innerHTML = `<div class="chat-message"><span class="my-message"><h1>Chat</h1></span></div>`;
      ref.chat.classList.add('fade-out');
      ref.chat.classList.remove('fade-in');
      ref.chat.addEventListener('transitionend', function handle() {
         ref.chat.classList.remove('fade-out');
         ref.chat.classList.add('hidden');
         ref.menu.classList.add('fade-in');
         ref.menu.classList.remove('hidden');
         ref.menuMain.classList.remove('hidden');
         ref.usernameOverlay.classList.add('hidden');
         ref.roomDiv.innerHTML = '<div class="center"><div class="loader"></div></div>';
         state = null;
         send({ type: 'rooms' });
         ref.chat.removeEventListener('transitionend', handle);
      });
   }
});

ref.createButton.addEventListener('mousedown', () => {
   ref.menu.classList.add('fade-out');
   ref.menu.classList.remove('fade-in');
   ref.menuMain.classList.add('fade-out');
   ref.menu.addEventListener('transitionend', function handle() {
      ref.menu.classList.remove('fade-out');
      ref.menuMain.classList.add('hidden');
      ref.menu.classList.add('fade-in');
      ref.menuMain.classList.remove('fade-out');
      ref.menuMain.classList.add('fade-in');
      ref.createMenu.classList.remove('hidden');
      ref.menu.removeEventListener('transitionend', handle);
   });
});

ref.createRoomButton.addEventListener('mousedown', () => {
   send({
      type: 'create-room',
      name: ref.serverNameInput.value,
      desc: ref.serverDescInput.value,
      private: ref.privateCheckBox.checked,
      password: ref.serverPasswordInput.value,
      username: ref.serverUsernameInput.value,
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

ref.usernameEnterButton.addEventListener('mousedown', () => {
   send({ type: 'join', id: roomId, username: ref.usernameInput.value });
   ref.usernameInput.value = '';
});

ref.privateEnterButton.addEventListener('mousedown', () => {
   send({ type: 'join', id: roomId, password: hash(ref.passwordInput.value) });
   ref.passwordInput.value = '';
});

ref.usernameOverlay.addEventListener('mousedown', () => {
   ref.usernameOverlay.classList.add('hidden');
   ref.usernameInput.value = '';
});

ref.privateOverlay.addEventListener('mousedown', () => {
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
   ref.menu.addEventListener('transitionend', function handle() {
      ref.menu.classList.remove('fade-out');
      ref.createMenu.classList.add('hidden');
      ref.menu.classList.add('fade-in');
      ref.createMenu.classList.remove('fade-out');
      ref.createMenu.classList.add('fade-in');
      ref.menuMain.classList.remove('hidden');
      ref.menu.removeEventListener('transitionend', handle);
   });
});

function serverMessage(msg) {
   console.log(msg);
   if (msg.type === 'my-room-update') {
      const roomData = msg.data;
      ref.playerCount.innerText = `${roomData.playerCount} / ${roomData.maxPlayers}`;
      game.playerCount = roomData.playerCount;
      game.maxPlayers = roomData.maxPlayers;
      game.players = roomData.players;
      game.room.name = roomData.room.name;
      ref.roomTitle.innerText = game.room.name;
   }
   if (msg.type === 'chat-update') {
      const messages = msg.messages;
      const isScrolledToBottom =
         ref.chatMessages.scrollHeight - ref.chatMessages.clientHeight <= ref.chatMessages.scrollTop + 1;
      for (const { author, content } of messages) {
         ref.chatMessages.innerHTML += `
         <div class="chat-message">
         	<span class="author ${author === selfId ? 'my-message' : ''}">${game.players[author].name}</span>
         	<span class="message">${content}</span>
         </div>
         `;
      }
      if (isScrolledToBottom) {
         ref.chatMessages.scrollTop = ref.chatMessages.scrollHeight - ref.chatMessages.clientHeight;
      }
   }
   if (msg.type === 'rooms') {
      setTimeout(() => {
         console.log('got room data');
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
                  ref.passwordInput.addEventListener('keydown', function handle(event) {
                     roomId = room.id;
                     if (event.key.toLowerCase() === 'enter' && /\S/.test(ref.passwordInput.value)) {
                        send({ type: 'join', id: roomId, password: hash(ref.passwordInput.value) });
                        ref.passwordInput.value = '';
                        ref.passwordInput.removeEventListener('keydown', handle);
                     }
                  });
               } else {
                  ref.usernameOverlay.classList.remove('hidden');
                  ref.usernameInput.focus();
                  ref.usernameInput.addEventListener('keydown', function handle(event) {
                     roomId = room.id;
                     if (event.key.toLowerCase() === 'enter' && /\S/.test(ref.usernameInput.value)) {
                        send({ type: 'join', id: roomId, username: ref.usernameInput.value });
                        ref.usernameInput.value = '';
                        ref.usernameInput.removeEventListener('keydown', handle);
                     }
                  });
               }
            });
         }
      }, 750);
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
      selfId = msg.selfId;
      game = msg.initPack;
      ref.roomTitle.innerText = game.room.name;
      console.log(game);
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
      window.ws.addEventListener('close', () => {
         window.socketStatus = 'error';
         alert('The connection with the server has been lost. Sorry, try refreshing or checking your internet :)');
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
               ref.loading.addEventListener('transitionend', function handle() {
                  ref.loading.classList.add('hidden');
                  ref.menu.classList.remove('hidden');
                  ref.loading.removeEventListener('transitionend', handle);
               });
            });
         });
      });
   });
}
