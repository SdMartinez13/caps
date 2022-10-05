const { io } = require("socket.io-client");
const socket = io("http://localhost:9000/caps")

socket.on("connect", () => {
  console.log(socket.id, '- connected driver');


  // socket.emit("chat message", "yo whats guuuuud");
});