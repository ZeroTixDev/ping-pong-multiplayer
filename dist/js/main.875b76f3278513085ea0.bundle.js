(()=>{"use strict";var t={910:(t,n,e)=>{e.d(n,{Z:()=>a});var r=e(645),o=e.n(r)()((function(t){return t[1]}));o.push([t.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\tfont-family: 'Lexend', sans-serif;\r\n\tbackground-color: #18182b;\r\n\tuser-select: none;\r\n}\r\n\r\n.no-overflow {\r\n\toverflow: hidden !important;\r\n}\r\n\r\n.title {\r\n\tcolor: white;\r\n\tfont-size: 1.7rem;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\theight: 60px;\r\n\twidth: 100vw;\r\n\tbackground-color: rgba(10, 8, 16, 0.6);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.center {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: absolute;\r\n\tleft :0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.button-disable {\r\n\tuser-select: none;\r\n\topacity: 0.8;\r\n\tcursor: default;\r\n\tpointer-events: none;\r\n}\r\n\r\n\r\n.menu .main {\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\tposition: absolute;\r\n\tleft: 50px;\r\n\ttop: 50px;\r\n\twidth: calc(100vw - 100px);\r\n\theight: calc(100vh - 100px);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tpadding: 20px;\r\n\ttransition: opacity 0.3s linear;\r\n}\r\n\r\n.create, .create-room {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tmargin: 10px;\r\n\tpadding: 20px;\r\n\tfont-size: 1.3rem;\r\n\tpadding-right: 80px;\r\n\tpadding-left: 80px;\r\n\tbackground-color: rgba(5, 4, 8, 0.4);\r\n\tcolor: white;\r\n\ttransition: background-color 0.1s linear;\r\n}\r\n\r\n\r\n.create:hover, .create-room:hover {\r\n\tbackground-color: rgba(5, 4, 8, 0.8);\r\n}\r\n\r\n.rooms {\r\n\tdisplay: flex;\r\n\tjustify-content: baseline;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tleft: 10%;\r\n\ttop: 10%;\r\n\twidth: 80%;\r\n\theight: 80%;\r\n\tbackground-color: rgba(23, 19, 48, 0.4);\r\n}\r\n\r\n.overflow {\r\n\toverflow-y: auto;\r\n\toverflow-x: hidden;\r\n\toverflow-wrap: break-word;\r\n}\r\n\r\n.overflow::-webkit-scrollbar {\r\n  width: 1em;\r\n}\r\n\r\n.overflow::-webkit-scrollbar-thumb {\r\n  background-color:  rgba(0, 0, 0, 0.3);\r\n  outline: 1px solid  rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n.overlay {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tz-index: 500;\r\n\tbackground-color: rgba(0, 0, 0, 0.6);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tuser-select: none;\r\n}\r\n\r\n.back-button {\r\n\tmargin: 20px;\r\n\tcolor: white;\r\n\tfont-size: 1rem;\r\n\tfont-weight: bold;\r\n\tbackground-color: #d40000;\r\n\tborder-radius: 6px;\r\n\ttransition: background-color 0.05s linear;\r\n}\r\n\r\n.leave {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: 45px;\r\n\tmargin: 10px;\r\n\twidth: 180px;\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: normal;\r\n\tpadding: 0;\r\n\theight: calc(40vh / 4);\r\n}\r\n\r\n.player-count {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: white;\r\n\tfont-size: 2rem;\r\n\theight:;\r\n\twidth: 180px;\r\n\tmargin: 10px;\r\n\theight: calc(40vh / 4);\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: calc(40vh / 4 + 45px);\r\n}\r\n\r\n.back-button:hover, .forfeit:hover {\r\n\tbackground-color: #4a0101;\r\n}\r\n\r\n\r\n.enter-button {\r\n\tmargin: 20px;\r\n\tcolor: white;\r\n\tfont-size: 1rem;\r\n\tfont-weight: bold;\r\n\tbackground-color: #3dba3d;\r\n\tborder-radius: 6px;\r\n\ttransition: background-color 0.05s linear;\r\n}\r\n\r\n.enter-button:hover {\r\n\tbackground-color: #2fc42f;\r\n}\r\n\r\n.room {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\ttransition: background-color 0.05s linear;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 40px;\r\n\tpadding-right: 60px;\r\n\tpadding-left: 60px;\r\n\tmin-height: 90px;\r\n\tcursor: pointer;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.room-description {\r\n\tposition: absolute;\r\n\tleft: 100px;\r\n\ttop: 55px;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.room-player-count {\r\n\tposition: absolute;\r\n\tright: 30px;\r\n\tfont-size: 1.6rem;\r\n\ttop: 30px;\r\n}\r\n\r\n.room-name {\r\n\tfont-weight: bold;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.main h1 {\r\n\tmargin-top: 40px;\r\n}\r\n\r\n.room:hover {\r\n\tbackground-color: rgba(15, 14, 31, 0.4);\r\n}\r\n\r\n.rooms .loader {\r\n\tborder: 15px solid rgba(12, 9, 20, 0.4);\r\n\tborder-bottom: 15px solid white;\r\n\tborder-right: 15px solid white;\r\n}\r\n\r\nbutton {\r\n\tposition: relative;\r\n\tpadding: 20px;\r\n\tpadding-left: 60px;\r\n\tpadding-right: 60px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.menu {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items:center;\r\n\tflex-direction: column;\r\n\tcolor: white;\r\n\tbackground-color: #3d4059;\r\n\tfilter: saturate(150%);\r\n\tmin-height: 100vh;\r\n\tmin-width: 100vw;\r\n\topacity: 1;\r\n\ttransition: opacity 0.3s linear;\r\n\tanimation: fade-in 0.3s linear;\r\n}\r\n\r\n\r\n.switch {\r\n  display: inline-block;\r\n  height: 34px;\r\n  position: relative;\r\n  width: 60px;\r\n}\r\n\r\n.switch input {\r\n  display:none;\r\n}\r\n\r\n.create-menu .sec {\r\n\tdisplay: flex;\r\n\tpadding: 5px;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 1px;\r\n}\r\n\r\ninput {\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcolor: black;\r\n\tfont-weight: 550;\r\n\tposition: relative;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.text {\r\n\tmargin: 20px;\r\n\tcolor: white;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.slider {\r\n  background-color: #ccc;\r\n  bottom: 0;\r\n  cursor: pointer;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  background-color: #fff;\r\n  bottom: 4px;\r\n  content: \"\";\r\n  height: 26px;\r\n  left: 4px;\r\n  position: absolute;\r\n  transition: .4s;\r\n  width: 26px;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: red;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n@keyframes fade-in {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.chat {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tbackground-color: #4f5169;\r\n\toverflow: hidden;\r\n\ttransition: opacity 0.3s linear;\r\n\toverflow: hidden;\r\n}\r\n\r\n.my-message {\r\n\tcolor: white !important;\r\n}\r\n\r\n.chat-message {\r\n\tfont-size: 1.2rem;\r\n\tmargin: 8px;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.chat-div {\r\n\tbackground-color: #444061;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 60vh;\r\n\theight: 40vh;\r\n\twidth: 100vw;\r\n\tz-index: 500;\r\n}\r\n\r\n.ready {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tbackground-color: #069157;\r\n\ttransition: background-color 0.15s linear;\r\n\tfont-size: 1.5rem;\r\n\tcolor: white;\r\n\tborder-radius: 2px;\r\n\tpadding: 0;\r\n\twidth: 180px;\r\n\tmargin: 10px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: calc(40vh / 4);\r\n}\r\n\r\n.author::after {\r\n\tcontent: ': ';\r\n}\r\n\r\n.author {\r\n\tcolor: rgb(180, 180, 180);\r\n}\r\n\r\n.chat-messages {\r\n\twidth: calc(100vw - 205px);\r\n\theight: calc(100vh - 60vh - 45px);\r\n\tbackground-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.ready:hover {\r\n\tbackground-color: #0db870;\r\n}\r\n\r\n.chat-div .chat-input {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(38, 34, 61, 0.7\t);\r\n\twidth: 100vw;\r\n\theight: 45px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.players-not-ready {\r\n\tcolor: #060d63;\r\n}\r\n\r\n\r\n.game {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\toverflow: hidden;\r\n\tbackground-color: #3f4a63;\r\n}\r\n\r\n.forfeit {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tbackground-color: red;\r\n\tcolor: white;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.ping {\r\n\tposition: absolute;\r\n\tcolor: white;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\ncanvas {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground-color: white;\r\n\toutline: none;\r\n\tborder: 3px solid white;\r\n}\r\n\r\n.gui {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index: 1000;\r\n}\r\n\r\n\r\n.game-status {\r\n\tposition: absolute;\r\n\ttop: calc(60vh - 50px);\r\n\twidth: 100vw;\r\n\tleft: 0;\r\n\theight: 50px;\r\n\tfont-size: 1.5rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.pong-div {\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 60vh;\r\n\toverflow: hidden;\r\n\tanimation: rotate 2s linear infinite;\r\n}\r\n\r\n@keyframes rotate {\r\n\t0% {\r\n\t\ttransform: rotate(0deg) scale(0.55);\r\n\t}\r\n\t50% {\r\n\t\ttransform: rotate(180deg) scale(0.75);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(360deg) scale(0.55);\r\n\t}\r\n}\r\n\r\n.ball {\r\n\tposition: absolute;\r\n\tbackground-color: #DC9306;\r\n\tborder-radius: 50%;\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tanimation: ball_animate 1s linear infinite;\r\n}\r\n\r\n.paddle {\r\n\tposition: absolute;\r\n\theight: 150px;\r\n\twidth: 20px;\r\n\tborder-radius: 5px;\r\n\tbackground-color: #14cccc;\r\n}\r\n\r\n.paddle-1 {\r\n\tleft: calc(50% - 150px);\r\n}\r\n\r\n.paddle-2 {\r\n\tleft: calc(50% + 150px);\r\n}\r\n\r\n@keyframes ball_animate {\r\n\t0% {\r\n\t\tleft: calc(50% - 130px);\r\n\t}\r\n\t50% {\r\n\t\tleft: calc(50% + 100px);\r\n\t}\r\n\t100% {\r\n\t\tleft: calc(50% - 130px);\r\n\t}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.connection-text {\r\n\tcolor: white;\r\n\tfont-size: 1.2rem;\r\n\ttext-align: center;\r\n\tmargin: 20px;\r\n\tmargin-bottom: 200px;\r\n\tline-height: 30px;\r\n}\r\n\r\n.fade-out {\r\n\topacity: 0;\r\n}\r\n\r\n\r\n\r\n.fade-in {\r\n\topacity: 1;\r\n}\r\n\r\n.loading  {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tmin-width: 100vw;\r\n\tmin-height: 100vh;\r\n\ttransition: opacity 0.3s linear;\r\n}\r\n\r\n.loading .loader {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n.loader{\r\n\tposition: absolute;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tborder-radius:50%;\r\n\tborder: 15px solid #18182b;\r\n\tborder-bottom: 15px solid white;\r\n\tborder-right: 15px solid white;\r\n\ttransform: rotate(0deg);\r\n\tanimation:animate 1.2s linear infinite;\r\n}\r\n\r\n\r\n\r\n\r\n@keyframes animate{\r\n\t0%{\r\n\t\ttransform:rotate(0deg);\r\n\t}\r\n\t50%{\r\n\t\ttransform: rotate(180deg);\r\n\t}\r\n\t100%{\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.effect-1 {\r\n\t animation: foolishIn 0.5s ease-in-out;\r\n}\r\n\r\n @keyframes foolishIn {\r\n\t0% {\r\n\t\t opacity: 1;\r\n\t\t -webkit-transform-origin: 0% 0%;\r\n\t\t transform-origin: 25% 25%;\r\n\t\t -webkit-transform: scale(0.5, 0.5) rotate(0deg);\r\n\t\t transform: scale(0.5, 0.5) rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\t opacity: 1;\r\n\t\t -webkit-transform-origin: 50% 50%;\r\n\t\t transform-origin: 50% 50%;\r\n\t\t -webkit-transform: scale(1, 1) rotate(0deg);\r\n\t\t transform: scale(1, 1) rotate(0deg);\r\n\t}\r\n}\r\n",""]);const a=o},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},310:(t,n,e)=>{e.r(n),e.d(n,{default:()=>i});var r=e(379),o=e.n(r),a=e(910);o()(a.Z,{insert:"head",singleton:!1});const i=a.Z.locals||{}},379:(t,n,e)=>{var r,o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function i(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function s(t,n){for(var e={},r=[],o=0;o<t.length;o++){var s=t[o],c=n.base?s[0]+n.base:s[0],d=e[c]||0,l="".concat(c," ").concat(d);e[c]=d+1;var u=i(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:g(p,n),references:1}),r.push(l)}return r}function c(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=e.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,l=(d=[],function(t,n){return d[t]=n,d.filter(Boolean).join("\n")});function u(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(n,o);else{var a=document.createTextNode(o),i=t.childNodes;i[n]&&t.removeChild(i[n]),i.length?t.insertBefore(a,i[n]):t.appendChild(a)}}function p(t,n,e){var r=e.css,o=e.media,a=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(t,n){var e,r,o;if(n.singleton){var a=h++;e=m||(m=c(n)),r=u.bind(null,e,a,!1),o=u.bind(null,e,a,!0)}else e=c(n),r=p.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=i(e[r]);a[o].references--}for(var c=s(t,n),d=0;d<e.length;d++){var l=i(e[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=c}}}},65:(t,n,e)=>{const r=e(308),o=e(337);t.exports={Update:r,Render:o}},337:(t,n,e)=>{const r=t=>Math.round(t),{phrases:o}=e(229);let a="";for(const[t,n]of Object.entries(o))a+=` ${t}. ${n} `;t.exports=function({game:t,ctx:n,canvas:e}){n.fillStyle="#202130",n.fillRect(0,0,e.width,e.height),void 0!==t&&((void 0!==t.countdown||t.countdownAlpha+.5<=0)&&(n.fillStyle="white",n.font="65px Lexend",n.textAlign="center",n.textBaseline="middle",n.globalAlpha=Math.max(0,t.countdownAlpha+.5),n.fillText(`${t.countdown<=0?"GO!":Math.ceil(t.countdown)}`,e.width/2,e.height/4),function({ctx:t,canvas:n,name1:e,name2:r,game:o}){o.countdown<=0||(t.textAlign="center",t.textBaseline="middle",t.font="55px Lexend",t.fillText(`${e} vs ${r}`,n.width/2,n.height/2-100))}({ctx:n,canvas:e,name1:Object.values(t.state().paddles).find((t=>t.x<e.width/2))?.name,name2:Object.values(t.state().paddles).find((t=>t.x>e.width/2))?.name,game:t}),n.globalAlpha=1),void 0!==t.state()&&(function(t,{ctx:n}){n.fillStyle="#DC9306",n.beginPath(),n.arc(r(t.x),r(t.y),t.radius,0,2*Math.PI),n.fill()}(t.renderState.ball,{ctx:n}),function(t,n,{ctx:e}){e.fillStyle="#14cccc";for(const o of Object.keys(t)){const a=t[o];e.fillStyle="#14cccc",e.roundRect(r(a.x-a.width/2),r(a.y-a.height/2),r(a.width),r(a.height),5).fill(),void 0!==a.text&&(e.textAlign="center",e.textBaseline="middle",e.font="40px Lexend",e.fillText(a.text,r(a.x),r(a.y-a.height/2-45))),o!==window.selfId||n||(e.fillStyle="white",e.beginPath(),e.arc(r(a.x),r(a.y-a.height/2-15),10,0,2*Math.PI),e.fill())}}(t.renderState.paddles,t.countdown<=0,{ctx:n}),function(t,n,{ctx:e,canvas:r}){e.fillStyle="white",e.font="50px Lexend",e.textBaseline="middle",e.textAlign="center",e.fillText(` ${t} - ${n} `,r.width/2,50)}(Object.values(t.state().scores)[0],Object.values(t.state().scores)[1],{ctx:n,canvas:e}),t.onChat&&function({ctx:t,canvas:n}){t.fillStyle="white",t.textAlign="center",t.textBaseline="middle",t.font="32px Lexend",t.fillText(a,n.width/2,n.height-40)}({ctx:n,canvas:e})))},CanvasRenderingContext2D.prototype.roundRect=function(t,n,e,r,o){return e<2*o&&(o=e/2),r<2*o&&(o=r/2),this.beginPath(),this.moveTo(t+o,n),this.arcTo(t+e,n,t+e,n+r,o),this.arcTo(t+e,n+r,t,n+r,o),this.arcTo(t,n+r,t,n,o),this.arcTo(t,n,t+e,n,o),this.closePath(),this}},308:(t,n,e)=>{const r=e(782).canvas,o=e(605),a=e(17),i=r.getContext("2d"),{SIMULATION_RATE:s,SMOOTHING_RATE:c}=e(229);function d(t,n,e){return t*(1-e)+n*e}t.exports=function(t){if(void 0===t||void 0===t.startTime||void 0===t.hasInitState||void 0===t.hasInitInput)return console.log("we dont have enough data to simulate the game"),{game:t,ctx:i,canvas:r};const n=Math.ceil((time()-t.startTime)/(1e3/s)),e=1/s,l=a(window.currentInput);void 0===t.ticksSent&&(t.ticksSent={}),t.poll().forEach((n=>{void 0===t.inputs[n.tick]&&(t.inputs[n.tick]=Object.create(null)),t.inputs[n.tick][n.id]={...t.inputs[n.tick][n.id],...n.input},t.tick=Math.min(t.tick,n.tick)})),t.pendingInputs=[];const u=[];for(;t.tick<n;){let n=!1;void 0!==t.countdown&&(t.countdown>0?(t.countdown-=e,n=t.countdown>0):(t.countdown=0,t.countdownAlpha-=e)),n?(t.states[t.tick+1]=a(t.states[t.tick]),t.inputs[t.tick+1]=a(t.inputs[t.tick])):(t.states[t.tick+1]=o(t.states[t.tick],t.inputs[t.tick]),void 0===t.inputs[t.tick+1]&&(t.inputs[t.tick+1]=Object.create(null)),void 0===t.ticksSent[t.tick+1]&&(t.inputs[t.tick+1][window.selfId]=l,u.push({tick:t.tick+1,input:l}),t.ticksSent[t.tick+1]=!0)),t.tick++}u.length>0&&send({inputs:[...u]}),t.pendingChats.forEach((n=>{t.inputs[t.tick][n.id]={number:n.number,...t.inputs[t.tick][n.id]}})),t.pendingChats=[];const p=(window.performance.now()-t.lastTime)/1e3;t.lastTime=window.performance.now();const m=Math.min(p*c,1);t.renderState.ball.x=d(t.renderState.ball.x,t.state().ball.x,m),t.renderState.ball.y=d(t.renderState.ball.y,t.state().ball.y,m);for(const n of Object.keys(t.renderState.paddles)){const e=t.renderState.paddles[n],r=a(t.state().paddles[n]);e.x=d(e.x,r.x,m),e.y=d(e.y,r.y,m),e.width=d(e.width,r.width,.2*m),e.height=d(e.height,r.height,.2*m),e.text=r.text,e.textOpacity=r.textOpacity}return t.renderState.ball.radius=d(t.renderState.ball.radius,t.state().ball.radius,.2*m),{game:t,ctx:i,canvas:r}}},782:t=>{t.exports={menu:document.querySelector(".menu"),lobby:document.querySelector(".lobby"),loading:document.querySelector(".loading"),connectionText:document.querySelector(".connection-text"),createButton:document.querySelector(".create"),createRoomButton:document.querySelector(".create-room"),createMenu:document.querySelector(".create-menu"),menuMain:document.querySelector(".menu .main"),privateCheckBox:document.querySelector("#private-checkbox"),passwordSection:document.querySelector(".server-password"),roomDiv:document.querySelector(".rooms"),usernameOverlay:document.getElementById("username-overlay"),privateOverlay:document.getElementById("password-overlay"),usernameInput:document.querySelector(".username-input"),passwordInput:document.querySelector(".password-input"),chat:document.querySelector(".chat"),createBackButton:document.querySelector("#create-back-button"),serverNameInput:document.querySelector(".server-name-input"),serverDescInput:document.querySelector(".server-desc-input"),serverUsernameInput:document.querySelector(".server-username-input"),serverPasswordInput:document.querySelector(".server-password-input"),chatInput:document.querySelector(".chat-input"),playerCount:document.querySelector(".player-count"),chatMessages:document.querySelector(".chat-messages"),leaveButton:document.querySelector(".leave"),roomTitle:document.querySelector(".room-title"),readyCounter:document.querySelector(".ready-counter"),readyButton:document.querySelector(".ready"),game:document.querySelector(".game"),canvas:document.querySelector(".game-canvas"),gui:document.querySelector(".gui"),pingText:document.querySelector(".ping-text"),playersNotReady:document.querySelector(".players-not-ready")}},454:(t,n,e)=>{const{CANVAS_WIDTH:r,CANVAS_HEIGHT:o}=e(229);t.exports=function(t,n=(()=>{})){for(const n of t)n.width!==r&&(n.width=r,n.style.width=`${r}px`),n.height!==o&&(n.height=o,n.style.height=`${o}px`),n.style.transform=`scale(${Math.min(window.innerWidth/r,window.innerHeight/o)*(n.classList.contains("game-canvas")?.85:1)})`,n.style.left=(window.innerWidth-r)/2+"px",n.style.top=(window.innerHeight-o)/2+"px";return n(),Math.min(window.innerWidth/r,window.innerHeight/o)}},191:(t,n,e)=>{const{TYPING_SPEED:r}=e(229);t.exports=async function(t,n,e=null,o=null){return new Promise(((a,i)=>{!function i(s=0){s<t.length?(n.innerHTML+=null!=e?`<${e} ${null==o?"":o}>${t.charAt(s)}</${e}>`:t.charAt(s),setTimeout((()=>i(s+1)),1e3/r)):a()}()}))}},229:t=>{t.exports={TYPING_SPEED:40,CANVAS_WIDTH:1600,CANVAS_HEIGHT:900,COUNTDOWN:3,SIMULATION_RATE:120,PADDLE_FRICTION:.89,SPEED:90,BALL_MAX_SPEED:1e3,INPUT_DECAY:.97,POINTS_TO_WIN:3,SMOOTHING_RATE:15,phrases:{1:"Wow!",2:"Close one!",3:"Hahahaha",4:"Okay.",5:"Gotta go!",6:"Thanks!",7:"I give up",8:"You suck",9:"Luck."},controls:{KeyW:{movement:!0,name:"up"},ArrowUp:{movement:!0,name:"up"},KeyS:{movement:!0,name:"down"},ArrowDown:{movement:!0,name:"down"},KeyO:{forfeit:!0},KeyF:{gamechat:!0},Digit1:{gameChatDigit:1},Digit2:{gameChatDigit:2},Digit3:{gameChatDigit:3},Digit4:{gameChatDigit:4},Digit5:{gameChatDigit:5},Digit6:{gameChatDigit:6},Digit7:{gameChatDigit:7},Digit8:{gameChatDigit:8},Digit9:{gameChatDigit:9}}}},17:t=>{t.exports=function t(n){const e=Object.create(null);for(const r of Object.keys(n))e[r]="object"==typeof n[r]?t(n[r]):n[r];return e}},794:t=>{t.exports=function(t){function n(t,n){const e=(65535&t)+(65535&n);return(t>>16)+(n>>16)+(e>>16)<<16|65535&e}function e(t,n){return t>>>n|t<<32-n}function r(t,n){return t>>>n}function o(t,n,e){return t&n^~t&e}function a(t,n,e){return t&n^t&e^n&e}function i(t){return e(t,2)^e(t,13)^e(t,22)}function s(t){return e(t,6)^e(t,11)^e(t,25)}function c(t){return e(t,7)^e(t,18)^r(t,3)}return function(t){const n="0123456789abcdef";let e="";for(let r=0;r<4*t.length;r++)e+=n.charAt(t[r>>2]>>8*(3-r%4)+4&15)+n.charAt(t[r>>2]>>8*(3-r%4)&15);return e}(function(t,d){const l=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),u=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),p=new Array(64);var m,h,g,f,w,v,y,b;let x,S;t[d>>5]|=128<<24-d%32,t[15+(d+64>>9<<4)]=d;for(var k=0;k<t.length;k+=16){m=u[0],h=u[1],g=u[2],f=u[3],w=u[4],v=u[5],y=u[6],b=u[7];for(var L=0;L<64;L++)p[L]=L<16?t[L+k]:n(n(n(e(I=p[L-2],17)^e(I,19)^r(I,10),p[L-7]),c(p[L-15])),p[L-16]),x=n(n(n(n(b,s(w)),o(w,v,y)),l[L]),p[L]),S=n(i(m),a(m,h,g)),b=y,y=v,v=w,w=n(f,x),f=g,g=h,h=m,m=n(x,S);u[0]=n(m,u[0]),u[1]=n(h,u[1]),u[2]=n(g,u[2]),u[3]=n(f,u[3]),u[4]=n(w,u[4]),u[5]=n(v,u[5]),u[6]=n(y,u[6]),u[7]=n(b,u[7])}var I;return u}(function(t){const n=Array();for(let e=0;e<8*t.length;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<24-e%32;return n}(t=function(t){t=t.replace(/\r\n/g,"\n");let n="";for(let e=0;e<t.length;e++){const r=t.charCodeAt(e);r<128?n+=String.fromCharCode(r):r>127&&r<2048?(n+=String.fromCharCode(r>>6|192),n+=String.fromCharCode(63&r|128)):(n+=String.fromCharCode(r>>12|224),n+=String.fromCharCode(r>>6&63|128),n+=String.fromCharCode(63&r|128))}return n}(t)),8*t.length))}},605:(t,n,e)=>{const r=e(17),{SPEED:o,SIMULATION_RATE:a,CANVAS_HEIGHT:i,CANVAS_WIDTH:s,PADDLE_FRICTION:c,BALL_MAX_SPEED:d,INPUT_DECAY:l,phrases:u}=e(229);function p(t,n){const e=Math.abs(n.x-t.x);if(e>t.width/2+n.radius)return!1;const r=Math.abs(n.y-t.y);if(r>t.height/2+n.radius)return!1;if(e<=t.width/2||r<=t.height/2)return!0;const o=e-t.width/2,a=r-t.height/2;return o*o+a*a<=n.radius*n.radius}t.exports=function(t,n){const e=r(t),m=1/a;e.won=!1,e.ball.xv>d&&(e.ball.xv=d),e.ball.xv<-d&&(e.ball.xv=-d),e.ball.yv>d&&(e.ball.yv=d),e.ball.yv<-d&&(e.ball.yv=-d),e.ball.x+=e.ball.xv*m,e.ball.y+=e.ball.yv*m,(e.ball.y-e.ball.radius<0||e.ball.y+e.ball.radius>i)&&(e.ball.yv*=-1);for(const t of Object.keys(e.paddles)){const r=e.paddles[t];if(void 0===r)continue;let a=n[t];if(void 0!==a?(r.lastInput={},r.lastInput.up=a.up,r.lastInput.down=a.down):void 0!==a&&void 0!==a.up&&void 0!==a.down||void 0!==r.lastInput&&(r.lastInput.up*=l,r.lastInput.down*=l,a={},a.up=r.lastInput.up,a.down=r.lastInput.down),void 0!==a&&(a.up&&(r.accel.y-=o*m*a.up),a.down&&(r.accel.y+=o*m*a.down),a.number&&(r.text=u[a.number],r.textOpacity=2)),void 0!==r.text&&(r.textOpacity-=m,r.textOpacity<=0&&(r.text=void 0)),r.accel.y*=Math.pow(c,20*m),r.y+=20*r.accel.y*m,r.height+=2*m,r.y>i-r.height/2&&(r.y=i-r.height/2,r.accel.x=0),r.y-r.height/2<0&&(r.y=r.height/2,r.accel.y=0),p(r,e.ball)){const t=(r.y-e.ball.y)/r.height*100;e.ball.yv+=-4*t,e.ball.xv*=-1.08,r.height-=50,r.height<r.width&&(r.height=r.width)}if(r.x<s/2&&e.ball.x+e.ball.radius<-500||r.x>s/2&&e.ball.x+e.ball.radius>s+500){e.won=!0;const n=Object.keys(e.scores).find((n=>n!==t));e.scores[n]++,e.ball.x=s/2,e.ball.y=i/2,e.ball.x+e.ball.radius<-500&&(e.ball.xv=.6*e.ball.speed),e.ball.x+e.ball.radius>s+500&&(e.ball.xv=.6*-e.ball.speed);for(const t of Object.values(e.paddles))t.height=300,t.lastInput={up:!1,down:!1};break}}return e}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{e(310);const t=e(782),n=e(794),r=e(191),o=e(454),a=e(65),{COUNTDOWN:i,controls:s}=e(229),c=e(17);let d=null,l=null;window.selfId=null,window.game=null,window.gameState=null,window.time=()=>(new Date).getTime(),window.currentInput={up:!1,down:!1},window.lastInput={up:!1,down:!1};let u=null;window.gameRaf=null,window.extraLag=0;const p=[];function m(t){if(t.repeat)return;const n=s[t.code];void 0!==n&&(n.movement&&(window.currentInput[n.name]="keydown"===t.type),n.forfeit&&"keydown"===t.type&&send({type:"forfeit"}),n.gamechat&&"keydown"===t.type&&(window.gameState.onChat=!window.gameState.onChat),void 0!==n.gameChatDigit&&"keydown"===t.type&&window.gameState.onChat&&(send({type:"game-chat",number:n.gameChatDigit}),window.gameState.pendingChats.push({id:window.selfId,number:n.gameChatDigit}),window.gameState.onChat=!1))}function h(){a.Render(a.Update(window.gameState)),window.gameRaf=requestAnimationFrame(h)}function g(e,r){if(e.state||e.inputs||e.ping||console.log(e),0===window.extraLag||r){if(void 0!==e.ping&&(p.length>10&&p.shift(),p.push(time()-e.ping),t.pingText.innerText=`${Math.round(p.reduce(((t,n)=>t+n))/p.length)}`),"my-room-update"===e.type){const n=e.data;if(void 0!==n.playerCount&&(game.playerCount=n.playerCount),void 0!==n.maxPlayers&&(game.maxPlayers=n.maxPlayers),void 0!==n.players&&(game.players=n.players),void 0!==n.room&&void 0!==n.room.name&&(game.room.name=n.room.name,t.roomTitle.innerText=game.room.name),void 0!==n.readyCount&&(console.log("changed readycount to",n.readyCount),game.readyCount=n.readyCount,t.readyCounter.innerText=`${game.readyCount} / ${game.maxPlayers}`),t.playerCount.innerText=`${n.playerCount} / ${n.maxPlayers}`,game.readyCount===game.maxPlayers||Object.keys(game.players).length===game.readyCount)t.playersNotReady.innerText="nothing";else{const n=[];for(const t of Object.values(game.players))t.ready||n.push(t.name);let e="";for(let t=0;t<n.length;t++)e+=n[t],t!==n.length-1&&(e+=", ");t.playersNotReady.innerText=`${e}`}}if(void 0!==e.change&&("game"===e.change&&(t.game.classList.remove("hidden"),t.chat.classList.add("hidden"),u="game",console.log("going into the game."),window.currentInput={up:!1,down:!1},window.lastInput={up:!1,down:!1},window.gameState={inputs:[],pendingInputs:[],pendingChats:[],states:[],lastTime:0,onChat:!1,poll:function(){return[...this.pendingInputs]},state(){return this.states[this.tick]}},window.gameRaf=requestAnimationFrame(h)),"chat"===e.change&&(t.game.classList.add("hidden"),t.chat.classList.remove("hidden"),t.readyButton.classList.remove("button-disable"),t.chatMessages.scrollTop=t.chatMessages.scrollHeight-t.chatMessages.clientHeight,u="chat",window.gameState=null,cancelAnimationFrame(window.gameRaf)),"rooms"===e.change&&(t.chat.classList.add("hidden"),t.menu.classList.remove("hidden"))),void 0!==e.start&&void 0!==e.serverOffset){const t=6e4*(new Date).getTimezoneOffset();window.gameState.startTime=new Date(e.start-e.serverOffset+t).getTime(),window.gameState.tick=0,window.gameState.countdownAlpha=1,window.gameState.countdown=i,console.log("starting game simulation...")}if(void 0!==e.initState&&(window.gameState.hasInitState=!0,window.gameState.states[0]=c(e.initState),window.gameState.renderState=c(e.initState)),void 0!==e.initInput&&(window.gameState.hasInitInput=!0,window.gameState.inputs[0]=c(e.initInput)),void 0!==e.inputs&&null!==window.gameState&&e.inputs.forEach((t=>{t.id!==window.selfId&&window.gameState.pendingInputs.push(t)})),void 0!==e.chats&&null!==window.gameState&&e.chats.forEach((t=>{t.id!==window.selfId&&window.gameState.pendingChats.push(t)})),"chat-update"===e.type){const n=e.messages;for(const{author:e,content:r}of n)t.chatMessages.innerHTML+=`\n         <div class="chat-message">\n         \t<span class="author ${e===selfId||"SERVER"===e?"my-message":""}">${"SERVER"===e?"SERVER":game.players[e].name}</span>\n         \t<span class="message">${r}</span>\n         </div>\n         `;t.chatMessages.scrollTop=t.chatMessages.scrollHeight-t.chatMessages.clientHeight}"rooms"===e.type&&setTimeout((()=>{console.log("got room data");const r=e.data;d=Object.create(null),t.roomDiv.innerHTML="";for(const n of r)d[n.id]=n,t.roomDiv.innerHTML+=`\n\t   \t\t\t<div class="room" id="${n.id}">\n\t\t\t\t\t\t<span class="room-name">${n.name}${n.private?'&nbsp;&nbsp;<span style="color: red;">[PRIVATE]</span>':""}</span>\n\t\t\t\t\t\t<span class="room-description">${n.desc}</span>\n\t\t\t\t\t\t<span class="room-player-count">${n.playerCount}/${n.maxPlayers}</span>\n\t\t\t\t\t</div>\n\t   \t\t`;for(const e of r)document.getElementById(`${e.id}`).addEventListener("mousedown",(r=>{r.preventDefault(),e.private?(t.privateOverlay.classList.remove("hidden"),t.passwordInput.focus(),t.passwordInput.onkeydown=function(r){l=e.id,"enter"===r.key.toLowerCase()&&/\S/.test(t.passwordInput.value)&&(send({type:"join",id:l,password:n(t.passwordInput.value)}),t.passwordInput.value="")}):(t.usernameOverlay.classList.remove("hidden"),t.usernameInput.focus(),t.usernameInput.onkeydown=function(n){l=e.id,"enter"===n.key.toLowerCase()&&/\S/.test(t.usernameInput.value)&&(send({type:"join",id:l,username:t.usernameInput.value}),t.usernameInput.value="")})}))}),750),"password-right"===e.type&&(t.privateOverlay.classList.add("hidden"),t.passwordInput.blur(),t.usernameOverlay.classList.remove("hidden"),t.usernameInput.focus(),t.usernameInput.addEventListener("keydown",(n=>{"enter"===n.key.toLowerCase()&&/\S/.test(t.usernameInput.value)&&(send({type:"join",id:l,username:t.usernameInput.value}),t.usernameInput.value="")}))),"success"===e.type&&(t.menu.classList.add("hidden"),t.chat.classList.remove("hidden"),t.chat.classList.add("effect-1"),t.readyButton.classList.remove("button-disable"),document.body.classList.add("no-overflow"),t.chat.onanimationend=()=>{t.chat.classList.remove("effect-1"),document.body.classList.remove("no-overflow")},u="chat",selfId=e.selfId,game=e.initPack,t.roomTitle.innerText=game.room.name,console.log("ready",`${game.readyCount} / ${game.maxPlayers}`),t.readyCounter.innerText=`${game.readyCount} / ${game.maxPlayers}`,console.log(game),t.chatInput.focus())}else setTimeout((()=>g(e,!0)),window.extraLag)}window.addEventListener("load",(()=>{!async function(){new Promise((async(n,e)=>{await r("Connecting to server...",t.connectionText),window.ws=new WebSocket(location.origin.replace(/^http/,"ws")),window.ws.addEventListener("open",(()=>{window.socketStatus="success"})),window.ws.addEventListener("close",(()=>{window.socketStatus="error",alert("The connection with the server has been lost. Sorry, try refreshing or checking your internet :)")})),window.ws.addEventListener("message",(t=>{g(JSON.parse(t.data))})),window.send=t=>window.ws.send(JSON.stringify(t));let o=null;new Promise(((n,e)=>{let a=!1;setTimeout((async()=>{!async function i(){o=requestAnimationFrame(i),null!=window.socketStatus&&(cancelAnimationFrame(o),a||"success"!==window.socketStatus?a||"error"!==window.socketStatus||(a=!0,await r("Failed",t.connectionText,"span",'style="color: red;"'),e()):(a=!0,await r("Success!",t.connectionText,"span",'style="color: #17e300;"'),n()))}()}),200)})).then((()=>{new Promise((async(n,e)=>{t.connectionText.innerHTML+="<br>",await r("Loading Game Data....",t.connectionText),o=null;let a=0,i=0,s=!1;send({type:"rooms"}),setTimeout((async()=>{!async function c(l=0){if(o=requestAnimationFrame(c),a+=(l-i)/1e3,i=l,!s&&null!==d)return cancelAnimationFrame(o),s=!0,await r("Success!",t.connectionText,"span",'style="color: #17e300;"'),void n();!s&&null===d&&a>=5&&(cancelAnimationFrame(o),s=!0,await r("Failed",t.connectionText,"span",'style="color: red;"'),e())}()}),200)})).then((()=>{t.connectionText.innerHTML+="<br>",r("Fetching room data...",t.connectionText).then((()=>{r("Success!",t.connectionText,"span",'style="color: #17e300;"'),t.loading.classList.add("fade-out"),t.loading.addEventListener("transitionend",(function n(){t.loading.classList.add("hidden"),t.menu.classList.remove("hidden"),t.loading.removeEventListener("transitionend",n)}))})),setInterval((()=>{send({ping:time()})}),200)}))}))}))}(),o([t.canvas,t.gui])})),window.addEventListener("resize",(()=>{o([t.canvas,t.gui])})),window.addEventListener("keydown",(n=>{"chat"===u&&document.activeElement!==t.chatInput&&"enter"===n.code.toLowerCase()&&t.chatInput.focus(),"game"===u&&m(n)})),window.addEventListener("keyup",(t=>{"game"===u&&m(t)})),t.chatInput.addEventListener("keydown",(n=>{if("chat"!==u)return t.chatInput.blur();"enter"===n.key.toLowerCase()&&/\S/.test(t.chatInput.value)&&(send({type:"chat",content:t.chatInput.value}),t.chatInput.value="")})),t.leaveButton.addEventListener("mousedown",(()=>{console.log("clicked leave, state ->",u),"chat"===u&&(console.log("requesting to leave"),send({type:"leave-room"}),t.chatMessages.innerHTML='<div class="chat-message"><span class="my-message"><h1>Chat</h1></span></div>',t.chat.classList.add("fade-out"),t.chat.classList.remove("fade-in"),t.chat.addEventListener("transitionend",(function n(){t.chat.classList.remove("fade-out"),t.chat.classList.add("hidden"),t.menu.classList.add("fade-in"),t.menu.classList.remove("hidden"),t.menuMain.classList.remove("hidden"),t.createMenu.classList.add("hidden"),t.usernameOverlay.classList.add("hidden"),t.roomDiv.innerHTML='<div class="center"><div class="loader"></div></div>',u=null,send({type:"rooms"}),t.chat.removeEventListener("transitionend",n)})))})),t.createButton.addEventListener("mousedown",(()=>{t.menu.classList.add("fade-out"),t.menu.classList.remove("fade-in"),t.menuMain.classList.add("fade-out"),t.menu.addEventListener("transitionend",(function n(){t.menu.classList.remove("fade-out"),t.menuMain.classList.add("hidden"),t.menu.classList.add("fade-in"),t.menuMain.classList.remove("fade-out"),t.menuMain.classList.add("fade-in"),t.createMenu.classList.remove("hidden"),t.menu.removeEventListener("transitionend",n)}))})),t.createRoomButton.addEventListener("mousedown",(()=>{send({type:"create-room",name:t.serverNameInput.value,desc:t.serverDescInput.value,private:t.privateCheckBox.checked,password:t.serverPasswordInput.value,username:t.serverUsernameInput.value})})),t.privateCheckBox.addEventListener("click",(()=>{t.privateCheckBox.checked?t.passwordSection.classList.contains("hidden")&&t.passwordSection.classList.remove("hidden"):t.passwordSection.classList.contains("hidden")||t.passwordSection.classList.add("hidden")})),t.readyButton.addEventListener("mousedown",(()=>{"chat"!==u||t.readyButton.classList.contains("button-disable")||(send({type:"ready"}),t.readyButton.classList.add("button-disable"))})),t.usernameOverlay.addEventListener("mousedown",(()=>{t.usernameOverlay.classList.add("hidden"),t.usernameInput.value=""})),t.privateOverlay.addEventListener("mousedown",(()=>{t.privateOverlay.classList.add("hidden"),t.passwordInput.value=""})),t.createBackButton.addEventListener("mousedown",(()=>{t.privateCheckBox.checked=!1,t.serverNameInput.value="",t.serverDescInput.value="",t.serverUsernameInput.value="",t.serverPasswordInput.value="",t.menu.classList.add("fade-out"),t.menu.classList.remove("fade-in"),t.createMenu.classList.add("fade-out"),t.menu.addEventListener("transitionend",(function n(){t.menu.classList.remove("fade-out"),t.createMenu.classList.add("hidden"),t.menu.classList.add("fade-in"),t.createMenu.classList.remove("fade-out"),t.createMenu.classList.add("fade-in"),t.menuMain.classList.remove("hidden"),t.menu.removeEventListener("transitionend",n)}))})),console.log("v2")})()})();