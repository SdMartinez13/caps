'use strict';

const Client = require('../lib/client');
const driver = new Client('driver');

driver.publish('GET_ALL', {queueID: 'Acme-Widgets'});
driver.publish('GET_ALL', {queueID: 'Acme-Widgets'});

driver.subscribe('PICKUP', (payload) => {
  setInterval(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    driver.publish('IN_TRANSIT', payload);
  }, 1000);
  setTimeout(() => {
    console.log(`DRIVER: delivered ${payload.orderID}`);
    driver.publish('DELIVERED', payload);
  }, 2000);
});






// 'use strict';

// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3002/caps');

// const handleDriverMessage = require('./handleDriver');
// const handleDriver = handleDriverMessage(socket);

// socket.on('PICKUP', handleDriver);
