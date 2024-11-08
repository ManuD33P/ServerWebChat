const express = require('express');
const http = require('http');
const Socket = require('./socket')
const eventRouter = require('./server/eventRouter');
const Chat = require('./server/class/Room/chat');


const app = express();
const server = http.createServer(app);
const socketInstance = new Socket(server)
const chatInstance = new Chat(socketInstance.io);

eventRouter(socketInstance.io);





const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
