const port = 9000;
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);
const handleVendor = require('../vendor/handleVendor');

httpServer.listen(port, () => {
  console.log(`listening on port: ${port}` )
});


io.of("/caps").on('connection', (socket) => {
  console.log(socket.id, 'a user connected');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });

  socket.on('VENDOR_NEEDS_PICKUP', handleVendor.needsPickup);

  // TODO: change these to use socket io
  
  // eventPool.on('DRIVER_NOTIFIED', handleDriver.driverNotified);
  // eventPool.on('DRIVER_PICKEDUP', handleDriver.driverPickedup);
  // eventPool.on('DRIVER_DELIVERED', handleDriver.driverDelivered);
  // eventPool.on('VENDOR_PACKAGE_DELIVERED', handleVendor.vendorDelivered);




});