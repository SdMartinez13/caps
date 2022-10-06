// 'use strict';

// const Chance = require('chance');
// const chance = new Chance();

// const joinRoom = require('./joinRoom');

// function pickupRequest(socket) {
//   console.log('-----Order Ready for Pickup-----');
//   let payload = {
//     store: `${chance.company()}`,
//     orderID: `${chance.string({ length: 8, alpha: true, numeric: true })}`,
//     customer: `${chance.name({ nationality: 'en' })}`,
//     address: `${chance.address()}, ${chance.city()}, ${chance.state()}`,
//   }
//   joinRoom(socket, payload);
//   socket.emit('PICKUP', payload);
// }

// module.exports = pickupRequest;
