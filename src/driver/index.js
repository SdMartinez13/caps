'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

const handleDriverMessage = require('./handleDriver');
const handleDriver = handleDriverMessage(socket);

socket.on('PICKUP', handleDriver);
