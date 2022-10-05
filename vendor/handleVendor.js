'use strict';


module.exports = {
  needsPickup: (payload) => {
    console.log('EVENT:', payload);
    console.log('VENDOR: Alerted system', payload.payload.orderId);
    console.log('\n');


  },

  vendorDelivered: (payload) => {
    console.log('EVENT:', payload);
    console.log('VENDOR: Package Delivered', payload.payload.orderId);
    console.log('\n');


  }
}
