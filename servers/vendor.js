const { io } = require("socket.io-client");
const chance = require("../chance");
const socket = io("http://localhost:9000/caps")



socket.on("connect", () => {
  console.log(socket.id, '- connected vendor');



  socket.emit(
    "VENDOR_NEEDS_PICKUP",
    {
      storeId: chance.integer({ min: 284, max: 2546 }),
      time: new Date().toISOString(), 
      event: 'VENDOR_NEEDS_PICKUP',
      payload: { name: 'hello', company: 'microhard', orderId: '1234'},
    }
  );


 

});