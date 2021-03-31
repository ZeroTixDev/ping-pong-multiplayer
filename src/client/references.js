'use strict';

module.exports = {
   menu: document.querySelector('.menu'),
   lobby: document.querySelector('.lobby'),
   loading: document.querySelector('.loading'),
   connectionText: document.querySelector('.connection-text'),
   createButton: document.querySelector('.create'),
   createRoomButton: document.querySelector('.create-room'),
   createMenu: document.querySelector('.create-menu'),
   menuMain: document.querySelector('.menu .main'),
   privateCheckBox: document.querySelector('#private-checkbox'),
   passwordSection: document.querySelector('.server-password'),
   roomDiv: document.querySelector('.rooms'),
   usernameOverlay: document.getElementById('username-overlay'),
   privateOverlay: document.getElementById('password-overlay'),
   usernameInput: document.querySelector('.username-input'),
   passwordInput: document.querySelector('.password-input'),
   game: document.querySelector('.game'),
   privateBackButton: document.querySelector('#password-back-button'),
   usernameBackButton: document.querySelector('#username-back-button'),
};
