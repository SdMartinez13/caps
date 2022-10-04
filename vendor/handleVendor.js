'use strict';

const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();

// module.exports = {
//   onPickup: (order) => {
//     const payload = {
//       store: chance.company,
//       orderId: chance.guid(),
//       customer: chance.name(),
//       address: `${chance.city()}, ${chance.state()}`,
//     };
//     eventPool.emit('PICKUP', payload);
//   }
// };

module.exports = (payload) =>{
  console.log(`It\'s been received, ${payload.order.name}`);
}