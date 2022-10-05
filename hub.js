'use strict';

const eventPool = require('./eventPool.js');
const handleVendor = require('./vendor/handleVendor');
const handleDriver = require('./driver/handleDriver');
const logger = require('./logger');
const chance = require('./chance.js');


eventPool.on('VENDOR_NEEDS_PICKUP', handleVendor.needsPickup);
eventPool.on('DRIVER_NOTIFIED', handleDriver.driverNotified);
eventPool.on('DRIVER_PICKEDUP', handleDriver.driverPickedup);
eventPool.on('DRIVER_DELIVERED', handleDriver.driverDelivered);
eventPool.on('VENDOR_PACKAGE_DELIVERED', handleVendor.vendorDelivered);


setInterval(() => {
  console.log(chance);
  const order = {
    store: chance.company(),
    orderId: chance.guid({ version: 4 }),
    customer: chance.last(),
    address: chance.address(),
  };
  console.log(order.customer);
  console.log('---------------------Starting a New order---------------------');

  eventPool.emit('VENDOR_NEEDS_PICKUP', { time: new Date().toISOString(), event: 'VENDOR_NEEDS_PICKUP', payload: order });
  eventPool.emit('DRIVER_NOTIFIED', { time: new Date().toISOString(), event: 'DRIVER_NOTIFIED', payload: order });
  eventPool.emit('DRIVER_PICKEDUP', { time: new Date().toISOString(), event: 'DRIVER_PICKEDUP', payload: order });
  eventPool.emit('DRIVER_DELIVERED', { time: new Date().toISOString(), event: 'DRIVER_DELIVERED', payload: order });
  eventPool.emit('VENDOR_PACKAGE_DELIVERED', { time: new Date().toISOString(), event: 'VENDOR_PACKAGE_DELIVERED', payload: order });

}, 5000);
