'use strict';

const Client = require('../lib/client');
let flowerShop = new Client('1-800-flowers');

const Chance = require('chance');
const chance = new Chance();

flowerShop.subscribe('DELIVERED', (payload) => {
  console.log(`Thank you for delivering ${payload.orderID}`);
});

flowerShop.subscribe('IN_TRANSIT', (payload) => {
  console.log(`Confirmed Pickup: ${payload.orderID} is in-transit`);
});

setInterval(() => {
  let payload = {
    store: '1-800-flowers',
    orderID: `${chance.string({ length: 8, alpha: true, numeric: true })}`,
    customer: `${chance.name({ nationality: 'en' })}`,
    address: `${chance.address()}, ${chance.city()}, ${chance.state()}`,
  };
  flowerShop.publish('PICKUP', payload);
}, 3000);
