'use strict';

const path = require('path');
const express = require('express');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ noServer: true });
const app = express();
const PORT = process.env.PORT || 80;
const server = app.listen(PORT, () => console.log(`[Server]: Listening on ${PORT}`));

app.get('/', (request, result) => {
   result.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.get('/shared/:fileName', (request, result) => {
   result.sendFile(path.join(__dirname, String('../shared/' + request.params.fileName)));
});

server.on('upgrade', (request, socket, head) => {
   wss.handleUpgrade(request, socket, head, (socket) => {
      wss.emit('connection', socket, request);
   });
});

app.use(express.static('dist'));

// const clients = Object.create(null);

// wss.on('connection', (ws, request) => {});
