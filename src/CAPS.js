'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;


const server = new Server(PORT);

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('Socket Connected to CAPS namespace', socket.id);

  socket.onAny((event, payload) => {
    let date = new Date;
    let time = date.toTimeString();
    console.log('EVENT', { event, time, payload });
  });

  socket.on('JOIN', (queueID) => {
    socket.join(queueID);
    socket.emit('JOIN', queueID);
  });

  // to driver queue
  socket.on('PICKUP', (payload) => {
    queueHandler(payload);
    let data = dataPacket(payload);
    socket.broadcast.emit('PICKUP', data);
  });

  // to vendor queue
  socket.on('IN_TRANSIT', (payload) => {
    queueHandler(payload);
    let data = dataPacket(payload);
    socket.broadcast.emit('IN_TRANSIT', data);
  });

  // to vendor queue
  socket.on('DELIVERED', (payload) => {
    queueHandler(payload);
    let data = dataPacket(payload);
    socket.broadcast.emit('DELIVERED', data);
  });

  socket.on('RECEIVED', (payload) => {
    let currentQueue = messageQueue.read(payload.queueID);
    if (!currentQueue) {
      throw new Error('No Queue Received');
    }
    let message = currentQueue.remove(payload.messageID);
    socket.to(payload.queueID).emit('RECEIVED', message);
  });

  socket.on('GET_ALL', (event, payload) => {
    console.log('Getting all messages');
    let currentQueue = messageQueue.read(payload.queueID);
    if (currentQueue && currentQueue.data) {
      Object.keys(currentQueue.data).forEach(messageID => {
        socket.emit(event, currentQueue.read(messageID));
      });
    }
  });

});

function queueHandler(payload) {
  let currentQueue = messageQueue.read(payload.queueID);
  if (!currentQueue) {
    let queueKey = messageQueue.store(payload.queueID, new Queue());
    currentQueue = messageQueue.read(queueKey);
  }
  currentQueue.store(payload.messageID, payload);
}

function dataPacket(payload) {
  let data = {
    messageID: uuid(),
    payload,
  };
  return data;
}

//   socket.on('JOIN', (room) => {
//     console.log(`You've joined the ${room} room`);
//   });
//   socket.on('PICKUP', (payload) => logEvent('PICKUP', payload));
//   socket.on('PICKUP', (payload) => socket.broadcast.emit('PICKUP', payload));
//   socket.on('IN_TRANSIT', (payload) => logEvent('IN-TRANSIT', payload));
//   socket.on('IN_TRANSIT', (payload) => socket.broadcast.emit('IN_TRANSIT', payload));
//   socket.on('DELIVERED', (payload) => logEvent('DELIVERED', payload));
//   socket.on('DELIVERED', (payload) => socket.broadcast.emit('DELIVERED', payload));
// });

// function logEvent(event, payload) {
//   let date = new Date;
//   let time = date.toTimeString();
//   console.log('EVENT', {event, time, payload});
// }