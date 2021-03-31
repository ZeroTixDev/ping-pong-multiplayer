(()=>{"use strict";var n={910:(n,t,r)=>{r.d(t,{Z:()=>i});var e=r(645),o=r.n(e)()((function(n){return n[1]}));o.push([n.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\tfont-family: 'Lexend', sans-serif;\r\n\tbackground-color: #15131c;\r\n\tuser-select: none;\r\n}\r\n\r\n.menu .title {\r\n\tcolor: white;\r\n\tfont-size: 2rem;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\theight: 75px;\r\n\twidth: 100vw;\r\n\tbackground-color: rgba(5, 4, 8, 0.4);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n.menu .main {\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\tposition: absolute;\r\n\tleft: 50px;\r\n\ttop: 50px;\r\n\twidth: calc(100vw - 100px);\r\n\theight: calc(100vh - 100px);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tpadding: 20px;\r\n}\r\n\r\n.rooms {\r\n\tdisplay: flex;\r\n\tjustify-content: baseline;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tleft: 10%;\r\n\ttop: 10%;\r\n\twidth: 80%;\r\n\theight: 80%;\r\n\toverflow-y: auto;\r\n\tbackground-color: rgba(12, 9, 20, 0.4);\r\n}\r\n\r\n.room {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\ttransition: background-color 0.1s linear;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 40px;\r\n\tpadding-right: 60px;\r\n\tpadding-left: 60px;\r\n\tcursor: pointer;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.room-description {\r\n\tposition: absolute;\r\n\tleft: 100px;\r\n\ttop: 55px;\r\n}\r\n\r\n.room-player-count {\r\n\tposition: absolute;\r\n\tright: 30px;\r\n\tfont-size: 1.6rem;\r\n\ttop: 30px;\r\n}\r\n\r\n.room-name {\r\n\tfont-weight: bold;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.room:hover {\r\n\tbackground-color: rgba(11, 10, 20, 0.9);\r\n}\r\n\r\n.rooms .loader {\r\n\tborder: 15px solid rgba(12, 9, 20, 0.4);\r\n\tborder-bottom: 15px solid white;\r\n\tborder-right: 15px solid white;\r\n}\r\n\r\n.menu {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items:center;\r\n\tflex-direction: column;\r\n\tcolor: white;\r\n\tbackground-color: #15131c;\r\n\tfilter: saturate(150%);\r\n\tmin-height: 100vh;\r\n\tmin-width: 100vw;\r\n\topacity: 1;\r\n\tanimation: fade-in 0.8s linear;\r\n}\r\n\r\n@keyframes fade-in {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.connection-text {\r\n\tcolor: white;\r\n\tfont-size: 1.2rem;\r\n\ttext-align: center;\r\n\tmargin: 20px;\r\n\tmargin-bottom: 200px;\r\n\tline-height: 30px;\r\n}\r\n\r\n.fade-out {\r\n\topacity: 0;\r\n}\r\n\r\n.loading  {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tmin-width: 100vw;\r\n\tmin-height: 100vh;\r\n\ttransition: opacity 0.7s linear;\r\n}\r\n\r\n.loading .loader {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n.loader{\r\n\tposition: absolute;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tborder-radius:50%;\r\n\tborder: 15px solid #15131c;\r\n\tborder-bottom: 15px solid white;\r\n\tborder-right: 15px solid white;\r\n\ttransform: rotate(0deg);\r\n\tanimation:animate 1.2s linear infinite;\r\n}\r\n\r\n\r\n\r\n\r\n@keyframes animate{\r\n\t0%{\r\n\t\ttransform:rotate(0deg);\r\n\t}\r\n\t50%{\r\n\t\ttransform: rotate(180deg);\r\n\t}\r\n\t100%{\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none !important;\r\n}",""]);const i=o},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(n,r,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},310:(n,t,r)=>{r.r(t),r.d(t,{default:()=>a});var e=r(379),o=r.n(e),i=r(910);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(n,t,r)=>{var e,o=function(){var n={};return function(t){if(void 0===n[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[t]=r}return n[t]}}(),i=[];function a(n){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===n){t=r;break}return t}function c(n,t){for(var r={},e=[],o=0;o<n.length;o++){var c=n[o],s=t.base?c[0]+t.base:c[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,t),references:1}),e.push(d)}return e}function s(n){var t=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var i=r.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(t);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function u(n,t,r,e){var o=r?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function f(n,t,r){var e=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var p=null,m=0;function h(n,t){var r,e,o;if(t.singleton){var i=m++;r=p||(p=s(t)),e=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=s(t),e=f.bind(null,r,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return e(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var r=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<r.length;e++){var o=a(r[e]);i[o].references--}for(var s=c(n,t),l=0;l<r.length;l++){var d=a(r[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=s}}}},782:n=>{n.exports={menu:document.querySelector(".menu"),lobby:document.querySelector(".lobby"),loading:document.querySelector(".loading"),connectionText:document.querySelector(".connection-text")}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{r(310);const n=r(782),t={};async function e(n,t,r=null,e=null){return new Promise(((o,i)=>{!function i(a=0){a<n.length?(t.innerHTML+=null!=r?`<${r} ${null==e?"":e}>${n.charAt(a)}</${r}>`:n.charAt(a),setTimeout((()=>i(a+1)),20)):o()}()}))}window.addEventListener("load",(()=>{!async function(){new Promise((async(r,o)=>{await e("Connecting to server...",n.connectionText),window.ws=new WebSocket(location.origin.replace(/^http/,"ws")),window.ws.addEventListener("open",(()=>{window.socketStatus="success"})),window.ws.addEventListener("error",(()=>{window.socketStatus="error"}));let i=null;new Promise(((t,r)=>{let o=!1;setTimeout((async()=>{!async function a(){null!=window.socketStatus&&(cancelAnimationFrame(i),o||"success"!==window.socketStatus?o||"error"!==window.socketStatus||(o=!0,await e("Failed",n.connectionText,"span",'style="color: red;"'),r()):(o=!0,await e("Success!",n.connectionText,"span",'style="color: #17e300;"'),t())),i=requestAnimationFrame(a)}()}),200)})).then((()=>{new Promise((async(r,o)=>{n.connectionText.innerHTML+="<br>",await e("Loading Game Data....",n.connectionText),i=null;let a=0,c=0,s=!1;setTimeout((async()=>{!async function l(d=0){if(a+=(d-c)/1e3,c=d,!s&&null!=t)return cancelAnimationFrame(i),s=!0,await e("Success!",n.connectionText,"span",'style="color: #17e300;"'),void r();!s&&null==t&&a>=10&&(cancelAnimationFrame(i),s=!0,await e("Failed",n.connectionText,"span",'style="color: red;"'),o()),i=requestAnimationFrame(l)}()}),200)})).then((()=>{n.connectionText.innerHTML+="<br>",e("Hacking haha0201 [JUST KIDDING] ...",n.connectionText).then((()=>{e("Success!",n.connectionText,"span",'style="color: #17e300;"'),n.loading.classList.add("fade-out"),n.loading.addEventListener("transitionend",(()=>{n.loading.classList.add("hidden"),n.menu.classList.remove("hidden")}))}))}))}))}))}()}))})()})();