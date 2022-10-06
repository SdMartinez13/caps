'use strict';

const Client = require('../lib/client');
let acme = new Client('Acme-Widgets');

const Chance = require('chance');
const chance = new Chance();

acme.subscribe('DELIVERED', (payload) => {
  console.log(`Thank you for delivering ${payload.orderID}`, payload);
});

acme.subscribe('IN_TRANSIT', (payload) => {
  console.log(`Confirmed Pickup: ${payload.orderID} is in-transit`);
});

setInterval(() => {
  let payload = {
    store: 'Acme-Widgets',
    orderID: `${chance.string({ length: 8, alpha: true, numeric: true })}`,
    customer: `${chance.name({ nationality: 'en' })}`,
    address: `${chance.address()}, ${chance.city()}, ${chance.state()}`,
  };
  acme.publish('PICKUP', payload);
}, 3000);
