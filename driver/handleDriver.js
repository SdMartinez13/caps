'use strict';

const eventPool = require('../eventPool');

module.exports = {
  onDelivery: (payload) => {
    console.log('payload coming into handleDriver: ', payload);
    console.log(`DRIVER: picked up order # ${payload.order.orderId}`);
    // eventPool.emit('IN TRANSIT', payload);
    console.log(`DRIVER: delivered order # ${payload.order.orderId}`);
    // eventPool.emit('DELIVERED', payload);
    console.log(`Thank you, ${payload.order.customer}`);
  },

  driverNotified: (payload) => {
    console.log('EVENT:', payload);
    console.log('DRIVER: Notified of package', payload.payload.orderId);
    console.log('\n');


  },

  driverPickedup: (payload) => {
    console.log('EVENT:', payload);
    console.log('DRIVER: Picked up package', payload.payload.orderId);
    console.log('\n');
  },
  
  driverDelivered: (payload) => {
    console.log('EVENT:', payload);
    console.log('DRIVER: Delivered package', payload.payload.orderId);
    console.log('\n');
  }

};