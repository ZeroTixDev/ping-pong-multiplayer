/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/client/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/client/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\tfont-family: 'Lexend', sans-serif;\r\n\tbackground-color: #15131c;\r\n\tuser-select: none;\r\n}\r\n\r\n.menu .title {\r\n\tcolor: white;\r\n\tfont-size: 1.7rem;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\theight: 60px;\r\n\twidth: 100vw;\r\n\tbackground-color: rgba(5, 4, 8, 0.4);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n.menu .main {\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\tposition: absolute;\r\n\tleft: 50px;\r\n\ttop: 50px;\r\n\twidth: calc(100vw - 100px);\r\n\theight: calc(100vh - 100px);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tpadding: 20px;\r\n\ttransition: opacity 0.4s linear;\r\n}\r\n\r\n.create, .create-room {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tmargin: 10px;\r\n\tpadding: 20px;\r\n\tfont-size: 1.3rem;\r\n\tpadding-right: 80px;\r\n\tpadding-left: 80px;\r\n\tbackground-color: rgba(5, 4, 8, 0.4);\r\n\tcolor: white;\r\n\ttransition: background-color 0.1s linear;\r\n}\r\n\r\n\r\n.create:hover, .create-room:hover {\r\n\tbackground-color: rgba(5, 4, 8, 0.8);\r\n}\r\n\r\n.rooms {\r\n\tdisplay: flex;\r\n\tjustify-content: baseline;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tleft: 10%;\r\n\ttop: 10%;\r\n\twidth: 80%;\r\n\theight: 80%;\r\n\toverflow-y: auto;\r\n\tbackground-color: rgba(12, 9, 20, 0.4);\r\n}\r\n\r\n.overlay {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tz-index: 500;\r\n\tbackground-color: rgba(0, 0, 0, 0.95);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tuser-select: none;\r\n}\r\n\r\n.back-button {\r\n\tmargin: 20px;\r\n\tcolor: white;\r\n\tfont-size: 1rem;\r\n\tbackground-color: #d40000;\r\n\tborder-radius: 6px;\t\r\n\ttransition: background-color 0.05s linear;\r\n}\r\n\r\n.back-button:hover {\r\n\tbackground-color: #4a0101;\r\n}\r\n\r\n.room {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\ttransition: background-color 0.05s linear;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 40px;\r\n\tpadding-right: 60px;\r\n\tpadding-left: 60px;\r\n\tcursor: pointer;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.room-description {\r\n\tposition: absolute;\r\n\tleft: 100px;\r\n\ttop: 55px;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.room-player-count {\r\n\tposition: absolute;\r\n\tright: 30px;\r\n\tfont-size: 1.6rem;\r\n\ttop: 30px;\r\n}\r\n\r\n.room-name {\r\n\tfont-weight: bold;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.main h1 {\r\n\tmargin-top: 40px;\r\n}\r\n\r\n.room:hover {\r\n\tbackground-color: rgba(11, 10, 20, 0.9);\r\n}\r\n\r\n.rooms .loader {\r\n\tborder: 15px solid rgba(12, 9, 20, 0.4);\r\n\tborder-bottom: 15px solid white;\r\n\tborder-right: 15px solid white;\r\n}\r\n\r\nbutton {\r\n\tposition: relative;\r\n\tpadding: 20px;\r\n\tpadding-left: 60px;\r\n\tpadding-right: 60px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.menu {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items:center;\r\n\tflex-direction: column;\r\n\tcolor: white;\r\n\tbackground-color: #15131c;\r\n\tfilter: saturate(150%);\r\n\tmin-height: 100vh;\r\n\tmin-width: 100vw;\r\n\topacity: 1;\r\n\ttransition: opacity 0.8s linear;\r\n\tanimation: fade-in 0.8s linear;\r\n}\r\n\r\n\r\n.switch {\r\n  display: inline-block;\r\n  height: 34px;\r\n  position: relative;\r\n  width: 60px;\r\n}\r\n\r\n.switch input {\r\n  display:none;\r\n}\r\n\r\n.create-menu .sec {\r\n\tdisplay: flex;\r\n\tpadding: 5px;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 1px;\r\n}\r\n\r\ninput {\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcolor: black;\r\n\tfont-weight: 550;\r\n\tposition: relative;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.text {\r\n\tmargin: 20px;\r\n\tcolor: white;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.slider {\r\n  background-color: #ccc;\r\n  bottom: 0;\r\n  cursor: pointer;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  background-color: #fff;\r\n  bottom: 4px;\r\n  content: \"\";\r\n  height: 26px;\r\n  left: 4px;\r\n  position: absolute;\r\n  transition: .4s;\r\n  width: 26px;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: red;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n@keyframes fade-in {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.connection-text {\r\n\tcolor: white;\r\n\tfont-size: 1.2rem;\r\n\ttext-align: center;\r\n\tmargin: 20px;\r\n\tmargin-bottom: 200px;\r\n\tline-height: 30px;\r\n}\r\n\r\n.fade-out {\r\n\topacity: 0;\r\n}\r\n.fade-in {\r\n\topacity: 1;\r\n}\r\n\r\n.loading  {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tmin-width: 100vw;\r\n\tmin-height: 100vh;\r\n\ttransition: opacity 0.7s linear;\r\n}\r\n\r\n.loading .loader {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n.loader{\r\n\tposition: absolute;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tborder-radius:50%;\r\n\tborder: 15px solid #15131c;\r\n\tborder-bottom: 15px solid white;\r\n\tborder-right: 15px solid white;\r\n\ttransform: rotate(0deg);\r\n\tanimation:animate 1.2s linear infinite;\r\n}\r\n\r\n\r\n\r\n\r\n@keyframes animate{\r\n\t0%{\r\n\t\ttransform:rotate(0deg);\r\n\t}\r\n\t50%{\r\n\t\ttransform: rotate(180deg);\r\n\t}\r\n\t100%{\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none !important;\r\n}", "",{"version":3,"sources":["webpack://./src/client/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\tfont-family: 'Lexend', sans-serif;\r\n\tbackground-color: #15131c;\r\n\tuser-select: none;\r\n}\r\n\r\n.menu .title {\r\n\tcolor: white;\r\n\tfont-size: 1.7rem;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\theight: 60px;\r\n\twidth: 100vw;\r\n\tbackground-color: rgba(5, 4, 8, 0.4);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n.menu .main {\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\tposition: absolute;\r\n\tleft: 50px;\r\n\ttop: 50px;\r\n\twidth: calc(100vw - 100px);\r\n\theight: calc(100vh - 100px);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tpadding: 20px;\r\n\ttransition: opacity 0.4s linear;\r\n}\r\n\r\n.create, .create-room {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tmargin: 10px;\r\n\tpadding: 20px;\r\n\tfont-size: 1.3rem;\r\n\tpadding-right: 80px;\r\n\tpadding-left: 80px;\r\n\tbackground-color: rgba(5, 4, 8, 0.4);\r\n\tcolor: white;\r\n\ttransition: background-color 0.1s linear;\r\n}\r\n\r\n\r\n.create:hover, .create-room:hover {\r\n\tbackground-color: rgba(5, 4, 8, 0.8);\r\n}\r\n\r\n.rooms {\r\n\tdisplay: flex;\r\n\tjustify-content: baseline;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tleft: 10%;\r\n\ttop: 10%;\r\n\twidth: 80%;\r\n\theight: 80%;\r\n\toverflow-y: auto;\r\n\tbackground-color: rgba(12, 9, 20, 0.4);\r\n}\r\n\r\n.overlay {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tz-index: 500;\r\n\tbackground-color: rgba(0, 0, 0, 0.95);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tuser-select: none;\r\n}\r\n\r\n.back-button {\r\n\tmargin: 20px;\r\n\tcolor: white;\r\n\tfont-size: 1rem;\r\n\tbackground-color: #d40000;\r\n\tborder-radius: 6px;\t\r\n\ttransition: background-color 0.05s linear;\r\n}\r\n\r\n.back-button:hover {\r\n\tbackground-color: #4a0101;\r\n}\r\n\r\n.room {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tbackground-color: rgba(0, 0, 0, 0);\r\n\ttransition: background-color 0.05s linear;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 40px;\r\n\tpadding-right: 60px;\r\n\tpadding-left: 60px;\r\n\tcursor: pointer;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.room-description {\r\n\tposition: absolute;\r\n\tleft: 100px;\r\n\ttop: 55px;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.room-player-count {\r\n\tposition: absolute;\r\n\tright: 30px;\r\n\tfont-size: 1.6rem;\r\n\ttop: 30px;\r\n}\r\n\r\n.room-name {\r\n\tfont-weight: bold;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.main h1 {\r\n\tmargin-top: 40px;\r\n}\r\n\r\n.room:hover {\r\n\tbackground-color: rgba(11, 10, 20, 0.9);\r\n}\r\n\r\n.rooms .loader {\r\n\tborder: 15px solid rgba(12, 9, 20, 0.4);\r\n\tborder-bottom: 15px solid white;\r\n\tborder-right: 15px solid white;\r\n}\r\n\r\nbutton {\r\n\tposition: relative;\r\n\tpadding: 20px;\r\n\tpadding-left: 60px;\r\n\tpadding-right: 60px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.menu {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items:center;\r\n\tflex-direction: column;\r\n\tcolor: white;\r\n\tbackground-color: #15131c;\r\n\tfilter: saturate(150%);\r\n\tmin-height: 100vh;\r\n\tmin-width: 100vw;\r\n\topacity: 1;\r\n\ttransition: opacity 0.8s linear;\r\n\tanimation: fade-in 0.8s linear;\r\n}\r\n\r\n\r\n.switch {\r\n  display: inline-block;\r\n  height: 34px;\r\n  position: relative;\r\n  width: 60px;\r\n}\r\n\r\n.switch input {\r\n  display:none;\r\n}\r\n\r\n.create-menu .sec {\r\n\tdisplay: flex;\r\n\tpadding: 5px;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 1px;\r\n}\r\n\r\ninput {\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcolor: black;\r\n\tfont-weight: 550;\r\n\tposition: relative;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.text {\r\n\tmargin: 20px;\r\n\tcolor: white;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.slider {\r\n  background-color: #ccc;\r\n  bottom: 0;\r\n  cursor: pointer;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  background-color: #fff;\r\n  bottom: 4px;\r\n  content: \"\";\r\n  height: 26px;\r\n  left: 4px;\r\n  position: absolute;\r\n  transition: .4s;\r\n  width: 26px;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: red;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n@keyframes fade-in {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.connection-text {\r\n\tcolor: white;\r\n\tfont-size: 1.2rem;\r\n\ttext-align: center;\r\n\tmargin: 20px;\r\n\tmargin-bottom: 200px;\r\n\tline-height: 30px;\r\n}\r\n\r\n.fade-out {\r\n\topacity: 0;\r\n}\r\n.fade-in {\r\n\topacity: 1;\r\n}\r\n\r\n.loading  {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tmin-width: 100vw;\r\n\tmin-height: 100vh;\r\n\ttransition: opacity 0.7s linear;\r\n}\r\n\r\n.loading .loader {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n.loader{\r\n\tposition: absolute;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tborder-radius:50%;\r\n\tborder: 15px solid #15131c;\r\n\tborder-bottom: 15px solid white;\r\n\tborder-right: 15px solid white;\r\n\ttransform: rotate(0deg);\r\n\tanimation:animate 1.2s linear infinite;\r\n}\r\n\r\n\r\n\r\n\r\n@keyframes animate{\r\n\t0%{\r\n\t\ttransform:rotate(0deg);\r\n\t}\r\n\t50%{\r\n\t\ttransform: rotate(180deg);\r\n\t}\r\n\t100%{\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/client/style.css":
/*!******************************!*\
  !*** ./src/client/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/client/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/constants.js":
/*!*********************************!*\
  !*** ./src/client/constants.js ***!
  \*********************************/
/***/ ((module) => {

module.exports = {
   typingSpeed: 40,
};


/***/ }),

/***/ "./src/client/references.js":
/*!**********************************!*\
  !*** ./src/client/references.js ***!
  \**********************************/
/***/ ((module) => {

"use strict";


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


/***/ }),

/***/ "./src/client/util/typeWriter.js":
/*!***************************************!*\
  !*** ./src/client/util/typeWriter.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { typingSpeed } = __webpack_require__(/*! ../constants.js */ "./src/client/constants.js");

module.exports = async function typeWriter(text, element, elementType = null, styles = null) {
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
};


/***/ }),

/***/ "./src/shared/hash.js":
/*!****************************!*\
  !*** ./src/shared/hash.js ***!
  \****************************/
/***/ ((module) => {

"use strict";


module.exports = function SHA256(s) {
   const chrsz = 8;
   const hexcase = 0;

   function safe_add(x, y) {
      const lsw = (x & 0xffff) + (y & 0xffff);
      const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xffff);
   }

   function S(X, n) {
      return (X >>> n) | (X << (32 - n));
   }

   function R(X, n) {
      return X >>> n;
   }

   function Ch(x, y, z) {
      return (x & y) ^ (~x & z);
   }

   function Maj(x, y, z) {
      return (x & y) ^ (x & z) ^ (y & z);
   }

   function Sigma0256(x) {
      return S(x, 2) ^ S(x, 13) ^ S(x, 22);
   }

   function Sigma1256(x) {
      return S(x, 6) ^ S(x, 11) ^ S(x, 25);
   }

   function Gamma0256(x) {
      return S(x, 7) ^ S(x, 18) ^ R(x, 3);
   }

   function Gamma1256(x) {
      return S(x, 17) ^ S(x, 19) ^ R(x, 10);
   }

   function core_sha256(m, l) {
      const K = new Array(
         0x428a2f98,
         0x71374491,
         0xb5c0fbcf,
         0xe9b5dba5,
         0x3956c25b,
         0x59f111f1,
         0x923f82a4,
         0xab1c5ed5,
         0xd807aa98,
         0x12835b01,
         0x243185be,
         0x550c7dc3,
         0x72be5d74,
         0x80deb1fe,
         0x9bdc06a7,
         0xc19bf174,
         0xe49b69c1,
         0xefbe4786,
         0xfc19dc6,
         0x240ca1cc,
         0x2de92c6f,
         0x4a7484aa,
         0x5cb0a9dc,
         0x76f988da,
         0x983e5152,
         0xa831c66d,
         0xb00327c8,
         0xbf597fc7,
         0xc6e00bf3,
         0xd5a79147,
         0x6ca6351,
         0x14292967,
         0x27b70a85,
         0x2e1b2138,
         0x4d2c6dfc,
         0x53380d13,
         0x650a7354,
         0x766a0abb,
         0x81c2c92e,
         0x92722c85,
         0xa2bfe8a1,
         0xa81a664b,
         0xc24b8b70,
         0xc76c51a3,
         0xd192e819,
         0xd6990624,
         0xf40e3585,
         0x106aa070,
         0x19a4c116,
         0x1e376c08,
         0x2748774c,
         0x34b0bcb5,
         0x391c0cb3,
         0x4ed8aa4a,
         0x5b9cca4f,
         0x682e6ff3,
         0x748f82ee,
         0x78a5636f,
         0x84c87814,
         0x8cc70208,
         0x90befffa,
         0xa4506ceb,
         0xbef9a3f7,
         0xc67178f2
      );
      const HASH = new Array(
         0x6a09e667,
         0xbb67ae85,
         0x3c6ef372,
         0xa54ff53a,
         0x510e527f,
         0x9b05688c,
         0x1f83d9ab,
         0x5be0cd19
      );
      const W = new Array(64);
      var a, b, c, d, e, f, g, h, i, j;
      let T1, T2;
      m[l >> 5] |= 0x80 << (24 - (l % 32));
      m[(((l + 64) >> 9) << 4) + 15] = l;
      for (var i = 0; i < m.length; i += 16) {
         a = HASH[0];
         b = HASH[1];
         c = HASH[2];
         d = HASH[3];
         e = HASH[4];
         f = HASH[5];
         g = HASH[6];
         h = HASH[7];
         for (var j = 0; j < 64; j++) {
            if (j < 16) W[j] = m[j + i];
            else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
            T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
            T2 = safe_add(Sigma0256(a), Maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = safe_add(d, T1);
            d = c;
            c = b;
            b = a;
            a = safe_add(T1, T2);
         }
         HASH[0] = safe_add(a, HASH[0]);
         HASH[1] = safe_add(b, HASH[1]);
         HASH[2] = safe_add(c, HASH[2]);
         HASH[3] = safe_add(d, HASH[3]);
         HASH[4] = safe_add(e, HASH[4]);
         HASH[5] = safe_add(f, HASH[5]);
         HASH[6] = safe_add(g, HASH[6]);
         HASH[7] = safe_add(h, HASH[7]);
      }
      return HASH;
   }

   function str2binb(str) {
      const bin = Array();
      const mask = (1 << chrsz) - 1;
      for (let i = 0; i < str.length * chrsz; i += chrsz) {
         bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - (i % 32));
      }
      return bin;
   }

   function Utf8Encode(string) {
      string = string.replace(/\r\n/g, '\n');
      let utftext = '';
      for (let n = 0; n < string.length; n++) {
         const c = string.charCodeAt(n);
         if (c < 128) {
            utftext += String.fromCharCode(c);
         } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
         } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
         }
      }
      return utftext;
   }

   function binb2hex(binarray) {
      const hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
      let str = '';
      for (let i = 0; i < binarray.length * 4; i++) {
         str +=
            hex_tab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8 + 4)) & 0xf) +
            hex_tab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8)) & 0xf);
      }
      return str;
   }
   s = Utf8Encode(s);
   return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/


__webpack_require__(/*! ./style.css */ "./src/client/style.css");

const ref = __webpack_require__(/*! ./references.js */ "./src/client/references.js");
const hash = __webpack_require__(/*! ../shared/hash.js */ "./src/shared/hash.js");
const typeWriter = __webpack_require__(/*! ./util/typeWriter.js */ "./src/client/util/typeWriter.js");

let rooms = null;

window.addEventListener('load', () => {
   handleNetworkRequestsAndText();
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
                  if (event.key.toLowerCase() === 'enter') {
                     send({ type: 'join', id: room.id, password: hash(ref.passwordInput.value) });
                     ref.passwordInput.value = '';
                  }
               });
            } else {
               ref.usernameOverlay.classList.remove('hidden');
               ref.usernameInput.focus();
               ref.usernameInput.addEventListener('keydown', (event) => {
                  if (event.key.toLowerCase() === 'enter') {
                     send({ type: 'join', id: room.id });
                     ref.usernameInput.value = '';
                  }
               });
            }
         });
      }
   }
   if (msg.type === 'success') {
      ref.menu.classList.add('hidden');
      ref.game.classList.remove('hidden');
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmcvLi9zcmMvY2xpZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9waW5nLXBvbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BpbmctcG9uZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3BpbmctcG9uZy8uL3NyYy9jbGllbnQvc3R5bGUuY3NzP2Q5N2MiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BpbmctcG9uZy8uL3NyYy9jbGllbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BpbmctcG9uZy8uL3NyYy9jbGllbnQvcmVmZXJlbmNlcy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmcvLi9zcmMvY2xpZW50L3V0aWwvdHlwZVdyaXRlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmcvLi9zcmMvc2hhcmVkL2hhc2guanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BpbmctcG9uZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9waW5nLXBvbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BpbmctcG9uZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpbmctcG9uZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpbmctcG9uZy8uL3NyYy9jbGllbnQvaW5kZXguanMiXSwibmFtZXMi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O0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFHQUFxRztBQUNyRztBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLCtGQUErRjtBQUMvRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUdBQXFHO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBLHlGQUF5RjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsVUFBVTtBQUNWLE9BQU87QUFDUCxJQUFJO0FBQ0oiLCJmaWxlIjoianMvbWFpbi5mN2Y5MTMwNDc5ODA0Njg0NDE3Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuXFx0bWFyZ2luOjA7XFxyXFxuXFx0cGFkZGluZzowO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtc2l6ZToxNnB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxMzFjO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAudGl0bGUge1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6IDEuN3JlbTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0aGVpZ2h0OiA2MHB4O1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDQsIDgsIDAuNCk7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubWVudSAubWFpbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogNTBweDtcXHJcXG5cXHR0b3A6IDUwcHg7XFxyXFxuXFx0d2lkdGg6IGNhbGMoMTAwdncgLSAxMDBweCk7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZSwgLmNyZWF0ZS1yb29tIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRtYXJnaW46IDEwcHg7XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiA4MHB4O1xcclxcblxcdHBhZGRpbmctbGVmdDogODBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDQsIDgsIDAuNCk7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jcmVhdGU6aG92ZXIsIC5jcmVhdGUtcm9vbTpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA0LCA4LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucm9vbXMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bGVmdDogMTAlO1xcclxcblxcdHRvcDogMTAlO1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0aGVpZ2h0OiA4MCU7XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCA5LCAyMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHR6LWluZGV4OiA1MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjk1KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2stYnV0dG9uIHtcXHJcXG5cXHRtYXJnaW46IDIwcHg7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDQwMDAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXHRcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMDVzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2stYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGEwMTAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucm9vbSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjA1cyBsaW5lYXI7XFxyXFxuXFx0cGFkZGluZy10b3A6IDIwcHg7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDQwcHg7XFxyXFxuXFx0cGFkZGluZy1yaWdodDogNjBweDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvb20tZGVzY3JpcHRpb24ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAxMDBweDtcXHJcXG5cXHR0b3A6IDU1cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm9vbS1wbGF5ZXItY291bnQge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRyaWdodDogMzBweDtcXHJcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXHJcXG5cXHR0b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5yb29tLW5hbWUge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiBoMSB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvb206aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsIDEwLCAyMCwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvb21zIC5sb2FkZXIge1xcclxcblxcdGJvcmRlcjogMTVweCBzb2xpZCByZ2JhKDEyLCA5LCAyMCwgMC40KTtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xcclxcblxcdGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxuXFx0cGFkZGluZy1yaWdodDogNjBweDtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzE1MTMxYztcXHJcXG5cXHRmaWx0ZXI6IHNhdHVyYXRlKDE1MCUpO1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcdG1pbi13aWR0aDogMTAwdnc7XFxyXFxuXFx0b3BhY2l0eTogMTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgbGluZWFyO1xcclxcblxcdGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCBpbnB1dCB7XFxyXFxuICBkaXNwbGF5Om5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbWVudSAuc2VjIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1hcmdpbjogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDU1MDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG5cXHRtYXJnaW46IDIwcHg7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3R0b206IDRweDtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgbGVmdDogNHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgd2lkdGg6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxyXFxuXFx0MCUge1xcclxcblxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0fVxcclxcblxcdDEwMCUge1xcclxcblxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uY29ubmVjdGlvbi10ZXh0IHtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1hcmdpbjogMjBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyMDBweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtb3V0IHtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG4uZmFkZS1pbiB7XFxyXFxuXFx0b3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmcgIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bWluLXdpZHRoOiAxMDB2dztcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuN3MgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZyAubG9hZGVyIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRlcntcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0d2lkdGg6IDEwMHB4O1xcclxcblxcdGhlaWdodDogMTAwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czo1MCU7XFxyXFxuXFx0Ym9yZGVyOiAxNXB4IHNvbGlkICMxNTEzMWM7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDE1cHggc29saWQgd2hpdGU7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuXFx0YW5pbWF0aW9uOmFuaW1hdGUgMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZXtcXHJcXG5cXHQwJXtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQ1MCV7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MTAwJXtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2xpZW50L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFFBQVE7Q0FDUixTQUFTO0NBQ1Qsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsaUNBQWlDO0NBQ2pDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFr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a0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0E7Q0FDQztFQUNDLFVBQVU7Q0FDWDtDQUNBO0VBQ0MsVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsTUFBTTtDQUNOLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLDBCQUEwQjtDQUMxQiwrQkFBK0I7Q0FDL0IsOEJBQThCO0NBQzlCLHVCQUF1QjtDQUN2QixzQ0FBc0M7QUFDdkM7Ozs7O0FBS0E7Q0FDQztFQUNDLHNCQUFzQjtDQUN2QjtDQUNBO0VBQ0MseUJBQXlCO0NBQzFCO0NBQ0E7RUFDQyx5QkFBeUI7Q0FDMUI7QUFDRDs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG5cXHRwYWRkaW5nOjA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1zaXplOjE2cHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxNTEzMWM7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51IC50aXRsZSB7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogMS43cmVtO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRoZWlnaHQ6IDYwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgNCwgOCwgMC40KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5tZW51IC5tYWluIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiA1MHB4O1xcclxcblxcdHRvcDogNTBweDtcXHJcXG5cXHR3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLCAuY3JlYXRlLXJvb20ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdG1hcmdpbjogMTBweDtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDgwcHg7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiA4MHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgNCwgOCwgMC40KTtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNyZWF0ZTpob3ZlciwgLmNyZWF0ZS1yb29tOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDQsIDgsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5yb29tcyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRsZWZ0OiAxMCU7XFxyXFxuXFx0dG9wOiAxMCU7XFxyXFxuXFx0d2lkdGg6IDgwJTtcXHJcXG5cXHRoZWlnaHQ6IDgwJTtcXHJcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDksIDIwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdHotaW5kZXg6IDUwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTUpO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1idXR0b24ge1xcclxcblxcdG1hcmdpbjogMjBweDtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNkNDAwMDA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcdFxcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4wNXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0YTAxMDE7XFxyXFxufVxcclxcblxcclxcbi5yb29tIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMDVzIGxpbmVhcjtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMjBweDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcclxcblxcdHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm9vbS1kZXNjcmlwdGlvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDEwMHB4O1xcclxcblxcdHRvcDogNTVweDtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yb29tLXBsYXllci1jb3VudCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHJpZ2h0OiAzMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcclxcblxcdHRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvb20tbmFtZSB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluIGgxIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm9vbTpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMTAsIDIwLCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucm9vbXMgLmxvYWRlciB7XFxyXFxuXFx0Ym9yZGVyOiAxNXB4IHNvbGlkIHJnYmEoMTIsIDksIDIwLCAwLjQpO1xcclxcblxcdGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxMzFjO1xcclxcblxcdGZpbHRlcjogc2F0dXJhdGUoMTUwJSk7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0bWluLXdpZHRoOiAxMDB2dztcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBsaW5lYXI7XFxyXFxuXFx0YW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3dpdGNoIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoIGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6bm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1tZW51IC5zZWMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAxcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXdlaWdodDogNTUwO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQge1xcclxcblxcdG1hcmdpbjogMjBweDtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zaXRpb246IC40cztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvdHRvbTogNHB4O1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBoZWlnaHQ6IDI2cHg7XFxyXFxuICBsZWZ0OiA0cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB3aWR0aDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXHJcXG5cXHQwJSB7XFxyXFxuXFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHR9XFxyXFxuXFx0MTAwJSB7XFxyXFxuXFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5jb25uZWN0aW9uLXRleHQge1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAyMHB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDIwMHB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZS1vdXQge1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbi5mYWRlLWluIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZyAge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRtaW4td2lkdGg6IDEwMHZ3O1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC43cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nIC5sb2FkZXIge1xcclxcblxcdG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGVye1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR3aWR0aDogMTAwcHg7XFxyXFxuXFx0aGVpZ2h0OiAxMDBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjUwJTtcXHJcXG5cXHRib3JkZXI6IDE1cHggc29saWQgIzE1MTMxYztcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xcclxcblxcdGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG5cXHRhbmltYXRpb246YW5pbWF0ZSAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbmltYXRle1xcclxcblxcdDAle1xcclxcblxcdFxcdHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDUwJXtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQxMDAle1xcclxcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgdHlwaW5nU3BlZWQ6IDQwLFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBtZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLFxuICAgbG9iYnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2JieScpLFxuICAgbG9hZGluZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKSxcbiAgIGNvbm5lY3Rpb25UZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ubmVjdGlvbi10ZXh0JyksXG4gICBjcmVhdGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUnKSxcbiAgIGNyZWF0ZVJvb21CdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcm9vbScpLFxuICAgY3JlYXRlTWVudTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1tZW51JyksXG4gICBtZW51TWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUgLm1haW4nKSxcbiAgIHByaXZhdGVDaGVja0JveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaXZhdGUtY2hlY2tib3gnKSxcbiAgIHBhc3N3b3JkU2VjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZlci1wYXNzd29yZCcpLFxuICAgcm9vbURpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb21zJyksXG4gICB1c2VybmFtZU92ZXJsYXk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZS1vdmVybGF5JyksXG4gICBwcml2YXRlT3ZlcmxheTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLW92ZXJsYXknKSxcbiAgIHVzZXJuYW1lSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZS1pbnB1dCcpLFxuICAgcGFzc3dvcmRJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3N3b3JkLWlucHV0JyksXG4gICBnYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpLFxuICAgcHJpdmF0ZUJhY2tCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZC1iYWNrLWJ1dHRvbicpLFxuICAgdXNlcm5hbWVCYWNrQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUtYmFjay1idXR0b24nKSxcbn07XG4iLCJjb25zdCB7IHR5cGluZ1NwZWVkIH0gPSByZXF1aXJlKCcuLi9jb25zdGFudHMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYyBmdW5jdGlvbiB0eXBlV3JpdGVyKHRleHQsIGVsZW1lbnQsIGVsZW1lbnRUeXBlID0gbnVsbCwgc3R5bGVzID0gbnVsbCkge1xuICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgICBmdW5jdGlvbiB0eXBlKGkgPSAwKSB7XG4gICAgICAgICBpZiAoaSA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gYDwke2VsZW1lbnRUeXBlfSAke3N0eWxlcyA9PSBudWxsID8gJycgOiBzdHlsZXN9PiR7dGV4dC5jaGFyQXQoXG4gICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICApfTwvJHtlbGVtZW50VHlwZX0+YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdHlwZShpICsgMSksIDEwMDAgLyB0eXBpbmdTcGVlZCk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdHlwZSgpO1xuICAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNIQTI1NihzKSB7XG4gICBjb25zdCBjaHJzeiA9IDg7XG4gICBjb25zdCBoZXhjYXNlID0gMDtcblxuICAgZnVuY3Rpb24gc2FmZV9hZGQoeCwgeSkge1xuICAgICAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICAgICAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gICAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhmZmZmKTtcbiAgIH1cblxuICAgZnVuY3Rpb24gUyhYLCBuKSB7XG4gICAgICByZXR1cm4gKFggPj4+IG4pIHwgKFggPDwgKDMyIC0gbikpO1xuICAgfVxuXG4gICBmdW5jdGlvbiBSKFgsIG4pIHtcbiAgICAgIHJldHVybiBYID4+PiBuO1xuICAgfVxuXG4gICBmdW5jdGlvbiBDaCh4LCB5LCB6KSB7XG4gICAgICByZXR1cm4gKHggJiB5KSBeICh+eCAmIHopO1xuICAgfVxuXG4gICBmdW5jdGlvbiBNYWooeCwgeSwgeikge1xuICAgICAgcmV0dXJuICh4ICYgeSkgXiAoeCAmIHopIF4gKHkgJiB6KTtcbiAgIH1cblxuICAgZnVuY3Rpb24gU2lnbWEwMjU2KHgpIHtcbiAgICAgIHJldHVybiBTKHgsIDIpIF4gUyh4LCAxMykgXiBTKHgsIDIyKTtcbiAgIH1cblxuICAgZnVuY3Rpb24gU2lnbWExMjU2KHgpIHtcbiAgICAgIHJldHVybiBTKHgsIDYpIF4gUyh4LCAxMSkgXiBTKHgsIDI1KTtcbiAgIH1cblxuICAgZnVuY3Rpb24gR2FtbWEwMjU2KHgpIHtcbiAgICAgIHJldHVybiBTKHgsIDcpIF4gUyh4LCAxOCkgXiBSKHgsIDMpO1xuICAgfVxuXG4gICBmdW5jdGlvbiBHYW1tYTEyNTYoeCkge1xuICAgICAgcmV0dXJuIFMoeCwgMTcpIF4gUyh4LCAxOSkgXiBSKHgsIDEwKTtcbiAgIH1cblxuICAgZnVuY3Rpb24gY29yZV9zaGEyNTYobSwgbCkge1xuICAgICAgY29uc3QgSyA9IG5ldyBBcnJheShcbiAgICAgICAgIDB4NDI4YTJmOTgsXG4gICAgICAgICAweDcxMzc0NDkxLFxuICAgICAgICAgMHhiNWMwZmJjZixcbiAgICAgICAgIDB4ZTliNWRiYTUsXG4gICAgICAgICAweDM5NTZjMjViLFxuICAgICAgICAgMHg1OWYxMTFmMSxcbiAgICAgICAgIDB4OTIzZjgyYTQsXG4gICAgICAgICAweGFiMWM1ZWQ1LFxuICAgICAgICAgMHhkODA3YWE5OCxcbiAgICAgICAgIDB4MTI4MzViMDEsXG4gICAgICAgICAweDI0MzE4NWJlLFxuICAgICAgICAgMHg1NTBjN2RjMyxcbiAgICAgICAgIDB4NzJiZTVkNzQsXG4gICAgICAgICAweDgwZGViMWZlLFxuICAgICAgICAgMHg5YmRjMDZhNyxcbiAgICAgICAgIDB4YzE5YmYxNzQsXG4gICAgICAgICAweGU0OWI2OWMxLFxuICAgICAgICAgMHhlZmJlNDc4NixcbiAgICAgICAgIDB4ZmMxOWRjNixcbiAgICAgICAgIDB4MjQwY2ExY2MsXG4gICAgICAgICAweDJkZTkyYzZmLFxuICAgICAgICAgMHg0YTc0ODRhYSxcbiAgICAgICAgIDB4NWNiMGE5ZGMsXG4gICAgICAgICAweDc2Zjk4OGRhLFxuICAgICAgICAgMHg5ODNlNTE1MixcbiAgICAgICAgIDB4YTgzMWM2NmQsXG4gICAgICAgICAweGIwMDMyN2M4LFxuICAgICAgICAgMHhiZjU5N2ZjNyxcbiAgICAgICAgIDB4YzZlMDBiZjMsXG4gICAgICAgICAweGQ1YTc5MTQ3LFxuICAgICAgICAgMHg2Y2E2MzUxLFxuICAgICAgICAgMHgxNDI5Mjk2NyxcbiAgICAgICAgIDB4MjdiNzBhODUsXG4gICAgICAgICAweDJlMWIyMTM4LFxuICAgICAgICAgMHg0ZDJjNmRmYyxcbiAgICAgICAgIDB4NTMzODBkMTMsXG4gICAgICAgICAweDY1MGE3MzU0LFxuICAgICAgICAgMHg3NjZhMGFiYixcbiAgICAgICAgIDB4ODFjMmM5MmUsXG4gICAgICAgICAweDkyNzIyYzg1LFxuICAgICAgICAgMHhhMmJmZThhMSxcbiAgICAgICAgIDB4YTgxYTY2NGIsXG4gICAgICAgICAweGMyNGI4YjcwLFxuICAgICAgICAgMHhjNzZjNTFhMyxcbiAgICAgICAgIDB4ZDE5MmU4MTksXG4gICAgICAgICAweGQ2OTkwNjI0LFxuICAgICAgICAgMHhmNDBlMzU4NSxcbiAgICAgICAgIDB4MTA2YWEwNzAsXG4gICAgICAgICAweDE5YTRjMTE2LFxuICAgICAgICAgMHgxZTM3NmMwOCxcbiAgICAgICAgIDB4Mjc0ODc3NGMsXG4gICAgICAgICAweDM0YjBiY2I1LFxuICAgICAgICAgMHgzOTFjMGNiMyxcbiAgICAgICAgIDB4NGVkOGFhNGEsXG4gICAgICAgICAweDViOWNjYTRmLFxuICAgICAgICAgMHg2ODJlNmZmMyxcbiAgICAgICAgIDB4NzQ4ZjgyZWUsXG4gICAgICAgICAweDc4YTU2MzZmLFxuICAgICAgICAgMHg4NGM4NzgxNCxcbiAgICAgICAgIDB4OGNjNzAyMDgsXG4gICAgICAgICAweDkwYmVmZmZhLFxuICAgICAgICAgMHhhNDUwNmNlYixcbiAgICAgICAgIDB4YmVmOWEzZjcsXG4gICAgICAgICAweGM2NzE3OGYyXG4gICAgICApO1xuICAgICAgY29uc3QgSEFTSCA9IG5ldyBBcnJheShcbiAgICAgICAgIDB4NmEwOWU2NjcsXG4gICAgICAgICAweGJiNjdhZTg1LFxuICAgICAgICAgMHgzYzZlZjM3MixcbiAgICAgICAgIDB4YTU0ZmY1M2EsXG4gICAgICAgICAweDUxMGU1MjdmLFxuICAgICAgICAgMHg5YjA1Njg4YyxcbiAgICAgICAgIDB4MWY4M2Q5YWIsXG4gICAgICAgICAweDViZTBjZDE5XG4gICAgICApO1xuICAgICAgY29uc3QgVyA9IG5ldyBBcnJheSg2NCk7XG4gICAgICB2YXIgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgajtcbiAgICAgIGxldCBUMSwgVDI7XG4gICAgICBtW2wgPj4gNV0gfD0gMHg4MCA8PCAoMjQgLSAobCAlIDMyKSk7XG4gICAgICBtWygoKGwgKyA2NCkgPj4gOSkgPDwgNCkgKyAxNV0gPSBsO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSArPSAxNikge1xuICAgICAgICAgYSA9IEhBU0hbMF07XG4gICAgICAgICBiID0gSEFTSFsxXTtcbiAgICAgICAgIGMgPSBIQVNIWzJdO1xuICAgICAgICAgZCA9IEhBU0hbM107XG4gICAgICAgICBlID0gSEFTSFs0XTtcbiAgICAgICAgIGYgPSBIQVNIWzVdO1xuICAgICAgICAgZyA9IEhBU0hbNl07XG4gICAgICAgICBoID0gSEFTSFs3XTtcbiAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNjQ7IGorKykge1xuICAgICAgICAgICAgaWYgKGogPCAxNikgV1tqXSA9IG1baiArIGldO1xuICAgICAgICAgICAgZWxzZSBXW2pdID0gc2FmZV9hZGQoc2FmZV9hZGQoc2FmZV9hZGQoR2FtbWExMjU2KFdbaiAtIDJdKSwgV1tqIC0gN10pLCBHYW1tYTAyNTYoV1tqIC0gMTVdKSksIFdbaiAtIDE2XSk7XG4gICAgICAgICAgICBUMSA9IHNhZmVfYWRkKHNhZmVfYWRkKHNhZmVfYWRkKHNhZmVfYWRkKGgsIFNpZ21hMTI1NihlKSksIENoKGUsIGYsIGcpKSwgS1tqXSksIFdbal0pO1xuICAgICAgICAgICAgVDIgPSBzYWZlX2FkZChTaWdtYTAyNTYoYSksIE1haihhLCBiLCBjKSk7XG4gICAgICAgICAgICBoID0gZztcbiAgICAgICAgICAgIGcgPSBmO1xuICAgICAgICAgICAgZiA9IGU7XG4gICAgICAgICAgICBlID0gc2FmZV9hZGQoZCwgVDEpO1xuICAgICAgICAgICAgZCA9IGM7XG4gICAgICAgICAgICBjID0gYjtcbiAgICAgICAgICAgIGIgPSBhO1xuICAgICAgICAgICAgYSA9IHNhZmVfYWRkKFQxLCBUMik7XG4gICAgICAgICB9XG4gICAgICAgICBIQVNIWzBdID0gc2FmZV9hZGQoYSwgSEFTSFswXSk7XG4gICAgICAgICBIQVNIWzFdID0gc2FmZV9hZGQoYiwgSEFTSFsxXSk7XG4gICAgICAgICBIQVNIWzJdID0gc2FmZV9hZGQoYywgSEFTSFsyXSk7XG4gICAgICAgICBIQVNIWzNdID0gc2FmZV9hZGQoZCwgSEFTSFszXSk7XG4gICAgICAgICBIQVNIWzRdID0gc2FmZV9hZGQoZSwgSEFTSFs0XSk7XG4gICAgICAgICBIQVNIWzVdID0gc2FmZV9hZGQoZiwgSEFTSFs1XSk7XG4gICAgICAgICBIQVNIWzZdID0gc2FmZV9hZGQoZywgSEFTSFs2XSk7XG4gICAgICAgICBIQVNIWzddID0gc2FmZV9hZGQoaCwgSEFTSFs3XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gSEFTSDtcbiAgIH1cblxuICAgZnVuY3Rpb24gc3RyMmJpbmIoc3RyKSB7XG4gICAgICBjb25zdCBiaW4gPSBBcnJheSgpO1xuICAgICAgY29uc3QgbWFzayA9ICgxIDw8IGNocnN6KSAtIDE7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGggKiBjaHJzejsgaSArPSBjaHJzeikge1xuICAgICAgICAgYmluW2kgPj4gNV0gfD0gKHN0ci5jaGFyQ29kZUF0KGkgLyBjaHJzeikgJiBtYXNrKSA8PCAoMjQgLSAoaSAlIDMyKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmluO1xuICAgfVxuXG4gICBmdW5jdGlvbiBVdGY4RW5jb2RlKHN0cmluZykge1xuICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLCAnXFxuJyk7XG4gICAgICBsZXQgdXRmdGV4dCA9ICcnO1xuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgIGNvbnN0IGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcbiAgICAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICAgICB9IGVsc2UgaWYgKGMgPiAxMjcgJiYgYyA8IDIwNDgpIHtcbiAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XG4gICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xuICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XG4gICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHV0ZnRleHQ7XG4gICB9XG5cbiAgIGZ1bmN0aW9uIGJpbmIyaGV4KGJpbmFycmF5KSB7XG4gICAgICBjb25zdCBoZXhfdGFiID0gaGV4Y2FzZSA/ICcwMTIzNDU2Nzg5QUJDREVGJyA6ICcwMTIzNDU2Nzg5YWJjZGVmJztcbiAgICAgIGxldCBzdHIgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluYXJyYXkubGVuZ3RoICogNDsgaSsrKSB7XG4gICAgICAgICBzdHIgKz1cbiAgICAgICAgICAgIGhleF90YWIuY2hhckF0KChiaW5hcnJheVtpID4+IDJdID4+ICgoMyAtIChpICUgNCkpICogOCArIDQpKSAmIDB4ZikgK1xuICAgICAgICAgICAgaGV4X3RhYi5jaGFyQXQoKGJpbmFycmF5W2kgPj4gMl0gPj4gKCgzIC0gKGkgJSA0KSkgKiA4KSkgJiAweGYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgIH1cbiAgIHMgPSBVdGY4RW5jb2RlKHMpO1xuICAgcmV0dXJuIGJpbmIyaGV4KGNvcmVfc2hhMjU2KHN0cjJiaW5iKHMpLCBzLmxlbmd0aCAqIGNocnN6KSk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9zdHlsZS5jc3MnKTtcblxuY29uc3QgcmVmID0gcmVxdWlyZSgnLi9yZWZlcmVuY2VzLmpzJyk7XG5jb25zdCBoYXNoID0gcmVxdWlyZSgnLi4vc2hhcmVkL2hhc2guanMnKTtcbmNvbnN0IHR5cGVXcml0ZXIgPSByZXF1aXJlKCcuL3V0aWwvdHlwZVdyaXRlci5qcycpO1xuXG5sZXQgcm9vbXMgPSBudWxsO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgIGhhbmRsZU5ldHdvcmtSZXF1ZXN0c0FuZFRleHQoKTtcbn0pO1xuXG5yZWYuY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgIHJlZi5tZW51LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gICByZWYubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gICByZWYubWVudU1haW4uY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgIHJlZi5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICByZWYubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICAgICAgcmVmLm1lbnVNYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgcmVmLm1lbnUuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgICAgcmVmLm1lbnVNYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gICAgICByZWYubWVudU1haW4uY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgICAgcmVmLmNyZWF0ZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICB9KTtcbn0pO1xuXG5yZWYuY3JlYXRlUm9vbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICByZWYubWVudS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xuICAgcmVmLm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicpO1xuICAgcmVmLmNyZWF0ZU1lbnUuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgIHJlZi5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICByZWYubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICAgICAgcmVmLmNyZWF0ZU1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICByZWYubWVudS5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG4gICAgICByZWYuY3JlYXRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICAgICAgcmVmLmNyZWF0ZU1lbnUuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgICAgcmVmLm1lbnVNYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgfSk7XG59KTtcblxucmVmLnByaXZhdGVDaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgIGNvbnN0IHNob3dQcml2YXRlU2VjdGlvbiA9IHJlZi5wcml2YXRlQ2hlY2tCb3guY2hlY2tlZDtcbiAgIGlmIChzaG93UHJpdmF0ZVNlY3Rpb24pIHtcbiAgICAgIGlmIChyZWYucGFzc3dvcmRTZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgIHJlZi5wYXNzd29yZFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB9XG4gICB9IGVsc2Uge1xuICAgICAgaWYgKCFyZWYucGFzc3dvcmRTZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgIHJlZi5wYXNzd29yZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9XG4gICB9XG59KTtcblxucmVmLnVzZXJuYW1lQmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICByZWYudXNlcm5hbWVPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgcmVmLnVzZXJuYW1lSW5wdXQudmFsdWUgPSAnJztcbn0pO1xuXG5yZWYucHJpdmF0ZUJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgcmVmLnByaXZhdGVPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgcmVmLnBhc3N3b3JkSW5wdXQudmFsdWUgPSAnJztcbn0pO1xuXG5mdW5jdGlvbiBzZXJ2ZXJNZXNzYWdlKG1zZykge1xuICAgLy8gY29uc29sZS5sb2cobXNnKTtcbiAgIGlmIChtc2cudHlwZSA9PT0gJ3Jvb21zJykge1xuICAgICAgY29uc3Qgcm9vbURhdGEgPSBtc2cuZGF0YTtcbiAgICAgIHJvb21zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJlZi5yb29tRGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgZm9yIChjb25zdCByb29tIG9mIHJvb21EYXRhKSB7XG4gICAgICAgICByb29tc1tyb29tLmlkXSA9IHJvb207XG4gICAgICAgICByZWYucm9vbURpdi5pbm5lckhUTUwgKz0gYFxuICAgXHRcdFx0PGRpdiBjbGFzcz1cInJvb21cIiBpZD1cIiR7cm9vbS5pZH1cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInJvb20tbmFtZVwiPiR7cm9vbS5uYW1lfSR7XG4gICAgICAgICAgICByb29tLnByaXZhdGUgPyAnJm5ic3A7Jm5ic3A7PHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkO1wiPltQUklWQVRFXTwvc3Bhbj4nIDogJydcbiAgICAgICAgIH08L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJyb29tLWRlc2NyaXB0aW9uXCI+JHtyb29tLmRlc2N9PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicm9vbS1wbGF5ZXItY291bnRcIj4ke3Jvb20ucGxheWVyQ291bnR9LyR7cm9vbS5tYXhQbGF5ZXJzfTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG4gICBcdFx0YDtcbiAgICAgIH1cbiAgICAgIC8vIGF0dGFjaCBsaXN0ZW5lcnNcbiAgICAgIGZvciAoY29uc3Qgcm9vbSBvZiByb29tRGF0YSkge1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cm9vbS5pZH1gKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAocm9vbS5wcml2YXRlKSB7XG4gICAgICAgICAgICAgICByZWYucHJpdmF0ZU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICByZWYucGFzc3dvcmRJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgcmVmLnBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICBzZW5kKHsgdHlwZTogJ2pvaW4nLCBpZDogcm9vbS5pZCwgcGFzc3dvcmQ6IGhhc2gocmVmLnBhc3N3b3JkSW5wdXQudmFsdWUpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgcmVmLnBhc3N3b3JkSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIHJlZi51c2VybmFtZU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICByZWYudXNlcm5hbWVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgcmVmLnVzZXJuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICBzZW5kKHsgdHlwZTogJ2pvaW4nLCBpZDogcm9vbS5pZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgIHJlZi51c2VybmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxuICAgaWYgKG1zZy50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgIHJlZi5tZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgcmVmLmdhbWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZU5ldHdvcmtSZXF1ZXN0c0FuZFRleHQoKSB7XG4gICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXdhaXQgdHlwZVdyaXRlcignQ29ubmVjdGluZyB0byBzZXJ2ZXIuLi4nLCByZWYuY29ubmVjdGlvblRleHQpO1xuXG4gICAgICB3aW5kb3cud3MgPSBuZXcgV2ViU29ja2V0KGxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpKTtcblxuICAgICAgd2luZG93LndzLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICB3aW5kb3cuc29ja2V0U3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgfSk7XG4gICAgICB3aW5kb3cud3MuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICB3aW5kb3cuc29ja2V0U3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgIGFsZXJ0KCdUaGUgY29ubmVjdGlvbiB3aXRoIHRoZSBzZXJ2ZXIgaGFzIGJlZW4gbG9zdCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHdpbmRvdy53cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgICAgICAgc2VydmVyTWVzc2FnZShKU09OLnBhcnNlKG1zZy5kYXRhKSk7XG4gICAgICB9KTtcblxuICAgICAgd2luZG93LnNlbmQgPSAob2JqKSA9PiB3aW5kb3cud3Muc2VuZChKU09OLnN0cmluZ2lmeShvYmopKTtcblxuICAgICAgLy8gY2hlY2sgc3VjY2Vzc1xuICAgICAgbGV0IHJhZiA9IG51bGw7XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICBsZXQgd3JvdGUgPSBmYWxzZTtcbiAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgKGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgICAgICAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xuICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zb2NrZXRTdGF0dXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICAgICAgICAgICAgICAgIGlmICghd3JvdGUgJiYgd2luZG93LnNvY2tldFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICB3cm90ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICBhd2FpdCB0eXBlV3JpdGVyKCdTdWNjZXNzIScsIHJlZi5jb25uZWN0aW9uVGV4dCwgJ3NwYW4nLCAnc3R5bGU9XCJjb2xvcjogIzE3ZTMwMDtcIicpO1xuICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghd3JvdGUgJiYgd2luZG93LnNvY2tldFN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgd3JvdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdHlwZVdyaXRlcignRmFpbGVkJywgcmVmLmNvbm5lY3Rpb25UZXh0LCAnc3BhbicsICdzdHlsZT1cImNvbG9yOiByZWQ7XCInKTtcbiAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgIH0sIDIwMCk7XG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlZi5jb25uZWN0aW9uVGV4dC5pbm5lckhUTUwgKz0gJzxicj4nO1xuICAgICAgICAgICAgYXdhaXQgdHlwZVdyaXRlcignTG9hZGluZyBHYW1lIERhdGEuLi4uJywgcmVmLmNvbm5lY3Rpb25UZXh0KTtcbiAgICAgICAgICAgIHJhZiA9IG51bGw7XG4gICAgICAgICAgICBsZXQgdGltZSA9IDA7XG4gICAgICAgICAgICBsZXQgbGFzdFRpbWUgPSAwO1xuICAgICAgICAgICAgbGV0IHdyb3RlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCByb29tc1dhaXRUaW1lID0gNTtcbiAgICAgICAgICAgIHNlbmQoeyB0eXBlOiAncm9vbXMnIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAoYXN5bmMgZnVuY3Rpb24gY2hlY2sobm93ID0gMCkge1xuICAgICAgICAgICAgICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrKTtcbiAgICAgICAgICAgICAgICAgIHRpbWUgKz0gKG5vdyAtIGxhc3RUaW1lKSAvIDEwMDA7XG4gICAgICAgICAgICAgICAgICBsYXN0VGltZSA9IG5vdztcbiAgICAgICAgICAgICAgICAgIGlmICghd3JvdGUgJiYgcm9vbXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgICAgICAgICAgICAgICAgICB3cm90ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICBhd2FpdCB0eXBlV3JpdGVyKCdTdWNjZXNzIScsIHJlZi5jb25uZWN0aW9uVGV4dCwgJ3NwYW4nLCAnc3R5bGU9XCJjb2xvcjogIzE3ZTMwMDtcIicpO1xuICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKCF3cm90ZSAmJiByb29tcyA9PT0gbnVsbCAmJiB0aW1lID49IHJvb21zV2FpdFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgICAgICAgICAgICAgICAgICB3cm90ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICBhd2FpdCB0eXBlV3JpdGVyKCdGYWlsZWQnLCByZWYuY29ubmVjdGlvblRleHQsICdzcGFuJywgJ3N0eWxlPVwiY29sb3I6IHJlZDtcIicpO1xuICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmVmLmNvbm5lY3Rpb25UZXh0LmlubmVySFRNTCArPSAnPGJyPic7XG4gICAgICAgICAgICB0eXBlV3JpdGVyKCdGZXRjaGluZyByb29tIGRhdGEuLi4nLCByZWYuY29ubmVjdGlvblRleHQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgdHlwZVdyaXRlcignU3VjY2VzcyEnLCByZWYuY29ubmVjdGlvblRleHQsICdzcGFuJywgJ3N0eWxlPVwiY29sb3I6ICMxN2UzMDA7XCInKTtcbiAgICAgICAgICAgICAgIHJlZi5sb2FkaW5nLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gICAgICAgICAgICAgICByZWYubG9hZGluZy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmVmLmxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICByZWYubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9