'use strict';

const eventPool = require('./eventPool.js');
const handleVendor = require('./vendor/handleVendor');
const handleDriver = require('./driver/handleDriver');
const logger = require('./logger');
const chance = require('./chance.js');

// const chance = new Chance;


eventPool.on('PICKUP', handleDriver);
// eventPool.on('DELIVERY', handleDriver);
eventPool.on('TRANSIT', handleVendor);

setInterval(() => {
  const order = {
    store: chance.company(),
    orderID: chance.guid({version: 4}),
    customer: chance.last(),
    address: chance.address(),
  };

  console.log('------------Starting a New order---------------------');
  eventPool.emit('PICKUP', { order });
  eventPool.emit('TRANSIT', { order });
  // eventPool.emit('DELIVERY', { order });
}, 5000);