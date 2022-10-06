// 'use strict';

// module.exports = (socket) => (payload) => {
//   setTimeout(() => {
//     console.log(`DRIVER: picked up ${payload.orderID}`);
//     socket.emit('IN_TRANSIT', payload);
//   }, 1000);
//   setTimeout(() => {
//     console.log(`DRIVER: delivered ${payload.orderID}`);
//     socket.emit('DELIVERED', payload);
//   }, 2000);
// };