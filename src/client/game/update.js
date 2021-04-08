'use strict';

const ref = require('../references.js');
const canvas = ref.canvas;
const ctx = canvas.getContext('2d');

module.exports = function Update(state) {
   // do something smart with state
   return { state, ctx, canvas };
};
