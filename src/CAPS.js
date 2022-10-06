'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;


const server = new Server(PORT);

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('Socket Connected to CAPS namespace', socket.id);
  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room`);
  });
  socket.on('PICKUP', (payload) => logEvent('PICKUP', payload));
  socket.on('PICKUP', (payload) => socket.broadcast.emit('PICKUP', payload));
  socket.on('IN_TRANSIT', (payload) => logEvent('IN-TRANSIT', payload));
  socket.on('IN_TRANSIT', (payload) => socket.broadcast.emit('IN_TRANSIT', payload));
  socket.on('DELIVERED', (payload) => logEvent('DELIVERED', payload));
  socket.on('DELIVERED', (payload) => socket.broadcast.emit('DELIVERED', payload));
});

function logEvent(event, payload) {
  let date = new Date;
  let time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
}