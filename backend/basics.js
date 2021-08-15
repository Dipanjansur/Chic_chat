const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
});
socketio.on("connection", (socket) => {
    console.log(socket);
    socket.on("sendit", (payload) => {
        console.log(payload);
        socketio.emit("sendit",payload);
    })
})
server.listen(8000, () => {
    console.log("hosetd on http://localhost:8000");
});