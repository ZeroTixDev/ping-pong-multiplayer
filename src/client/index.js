'use strict';

require('./style.css');

const ref = require('./references.js');
const hash = require('../shared/hash.js');
const typeWriter = require('./util/typeWriter.js');
const resize = require('./util/resize.js');
const Game = require('./game/game.js');
const { COUNTDOWN, controls } = require('../shared/constants.js');
const copy = require('../shared/copy.js');

let rooms = null;
let roomId = null;
window.selfId = null;
let game = null;
window.gameState = null;
window.currentInput = { up: false, down: false };
window.lastInput = { up: false, down: false };
let state = null; // THIS IS NULL
window.gameRaf = null;
window.extraLag = 0;

const pings = [];
const pingAmount = 5;

window.addEventListener('load', () => {
   handleNetworkRequestsAndText();
   resize([ref.canvas, ref.gui]);
});

window.addEventListener('resize', () => {
   resize([ref.canvas, ref.gui]);
});

window.addEventListener('keydown', (event) => {
   if (state === 'chat' && document.activeElement !== ref.chatInput && event.code.toLowerCase() === 'enter') {
      ref.chatInput.focus();
   }
   if (state === 'game') {
      trackKeys(event);
   }
});

window.addEventListener('keyup', (event) => {
   if (state === 'game') {
      trackKeys(event);
   }
});

function trackKeys(event) {
   if (event.repeat) return;
   const control = controls[event.code];
   if (control === undefined) return;
   if (control.movement) {
      window.currentInput[control.name] = event.type === 'keydown';
   }
}

function gameLoop() {
   Game.Render(Game.Update(window.gameState));
   window.gameRaf = requestAnimationFrame(gameLoop);
}

function startGame() {
   window.gameRaf = requestAnimationFrame(gameLoop);
}

function endGame() {
   cancelAnimationFrame(window.gameRaf);
}

ref.chatInput.addEventListener('keydown', (event) => {
   if (state !== 'chat') return ref.chatInput.blur();
   if (event.key.toLowerCase() === 'enter' && /\S/.test(ref.chatInput.value)) {
      // send to server
      send({ type: 'chat', content: ref.chatInput.value });
      ref.chatInput.value = '';
   }
});

ref.forfeitButton.addEventListener('mousedown', () => {
   if (state !== 'game') return;
   send({ type: 'forfeit' });
   ref.forfeitButton.classList.add('button-disable');
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
         ref.createMenu.classList.add('hidden');
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

ref.readyButton.addEventListener('mousedown', () => {
   if (state === 'chat' && !ref.readyButton.classList.contains('button-disable')) {
      send({ type: 'ready' });
      ref.readyButton.classList.add('button-disable');
   }
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

// function openFullscreen() {
//    const elem = document.documentElement;
//    if (elem.requestFullscreen) {
//       elem.requestFullscreen();
//    } else if (elem.webkitRequestFullscreen) {
//       /* Safari */
//       elem.webkitRequestFullscreen();
//    } else if (elem.msRequestFullscreen) {
//       /* IE11 */
//       elem.msRequestFullscreen();
//    }
// }
// function closeFullscreen() {
//    if (document.exitFullscreen) {
//       document.exitFullscreen();
//    } else if (document.webkitExitFullscreen) {
//       /* Safari */
//       document.webkitExitFullscreen();
//    } else if (document.msExitFullscreen) {
//       /* IE11 */
//       document.msExitFullscreen();
//    }
// }

function serverMessage(msg) {
   if (!msg.state && !msg.inputs) {
      console.log(msg);
   }
   if (msg.ping !== undefined) {
      pings.push(msg.ping);
      if (pings.length > 20) {
         pings.shift();
      }
      ref.pingText.innerText = `${Math.round(pings.reduce((a, b) => a + b) / pings.length)}`;
   }
   if (msg.type === 'my-room-update') {
      const roomData = msg.data;
      ref.playerCount.innerText = `${roomData.playerCount} / ${roomData.maxPlayers}`;
      if (roomData.playerCount !== undefined) {
         game.playerCount = roomData.playerCount;
      }
      if (roomData.maxPlayers !== undefined) {
         game.maxPlayers = roomData.maxPlayers;
      }
      if (roomData.players !== undefined) {
         game.players = roomData.players;
      }
      if (roomData.room !== undefined && roomData.room.name !== undefined) {
         game.room.name = roomData.room.name;
         ref.roomTitle.innerText = game.room.name;
      }
      if (roomData.readyCount !== undefined) {
         console.log('changed readycount to', roomData.readyCount);
         game.readyCount = roomData.readyCount;
         ref.readyCounter.innerText = `${game.readyCount} / ${game.maxPlayers}`;
      }
   }
   if (msg.change !== undefined) {
      if (msg.change === 'game') {
         ref.game.classList.remove('hidden');
         ref.forfeitButton.classList.remove('button-disable');
         ref.chat.classList.add('hidden');
         state = 'game';
         window.currentInput = { up: false, down: false };
         window.lastInput = { up: false, down: false };
         window.gameState = {
            inputs: [],
            pendingInputs: [],
            states: [],
            lastTime: 0,
            poll: function () {
               return [...this.pendingInputs];
            },
            state() {
               return this.states[this.tick];
            },
         };
         // openFullscreen();
         startGame();
      }
      if (msg.change === 'chat') {
         ref.game.classList.add('hidden');
         ref.chat.classList.remove('hidden');
         ref.readyButton.classList.remove('button-disable');
         state = 'chat';
         window.gameState = null;
         endGame();
      }
   }
   if (msg.start !== undefined) {
      window.gameState.startTime = msg.start;
      window.gameState.tick = 0;
      window.gameState.countdownAlpha = 1;
      window.gameState.countdown = COUNTDOWN; // msg countdown refers to the date.now on which server sent
   }
   if (msg.initState !== undefined) {
      window.gameState.hasInitState = true;
      window.gameState.states[0] = copy(msg.initState);
      window.gameState.renderState = copy(msg.initState);
   }
   if (msg.initInput !== undefined) {
      window.gameState.hasInitInput = true;
      window.gameState.inputs[0] = copy(msg.initInput);
   }
   if (msg.inputs !== undefined) {
      setTimeout(() => {
         msg.inputs.forEach((input) => {
            if (input.id !== window.selfId) {
               window.gameState.pendingInputs.push(input);
            }
         });
      }, window.extraLag);
   }
   if (msg.type === 'chat-update') {
      const messages = msg.messages;
      for (const { author, content } of messages) {
         ref.chatMessages.innerHTML += `
         <div class="chat-message">
         	<span class="author ${author === selfId || author === 'SERVER' ? 'my-message' : ''}">${
            author === 'SERVER' ? 'SERVER' : game.players[author].name
         }</span>
         	<span class="message">${content}</span>
         </div>
         `;
      }
      ref.chatMessages.scrollTop = ref.chatMessages.scrollHeight - ref.chatMessages.clientHeight;
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
                  ref.passwordInput.onkeydown = function handle(event) {
                     roomId = room.id;
                     if (event.key.toLowerCase() === 'enter' && /\S/.test(ref.passwordInput.value)) {
                        send({ type: 'join', id: roomId, password: hash(ref.passwordInput.value) });
                        ref.passwordInput.value = '';
                     }
                  };
               } else {
                  ref.usernameOverlay.classList.remove('hidden');
                  ref.usernameInput.focus();
                  ref.usernameInput.onkeydown = function handle(event) {
                     roomId = room.id;
                     if (event.key.toLowerCase() === 'enter' && /\S/.test(ref.usernameInput.value)) {
                        send({ type: 'join', id: roomId, username: ref.usernameInput.value });
                        ref.usernameInput.value = '';
                     }
                  };
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
      ref.chat.classList.add('effect-1');
      ref.readyButton.classList.remove('button-disable');
      document.body.classList.add('no-overflow');
      ref.chat.onanimationend = () => {
         ref.chat.classList.remove('effect-1');
         document.body.classList.remove('no-overflow');
      };
      state = 'chat';
      selfId = msg.selfId;
      game = msg.initPack;
      ref.roomTitle.innerText = game.room.name;
      console.log('ready', `${game.readyCount} / ${game.maxPlayers}`);
      ref.readyCounter.innerText = `${game.readyCount} / ${game.maxPlayers}`;
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
            setInterval(() => {
               send({ ping: Date.now() });
            }, 1000 / pingAmount);
         });
      });
   });
}
