const express = require('express');
const http = require('http');
const Socket = require('./socket')
const cors = require('cors'); 
const eventRouter = require('./server/eventRouter');
const Chat = require('./server/class/Room/chat');
const {FRONT_ENDPOINT} = process.env;

const app = express();
// app.use(cors({ 
//     origin: FRONT_ENDPOINT || "https://web-chat-pied.vercel.app" , 
//     credentials: true, 
//     optionsSuccessStatus: 200 
// }));

app.use((req, res, next) => { 
res.header('Access-Control-Allow-Origin', FRONT_ENDPOINT ||  "https://web-chat-pied.vercel.app"); 
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
 next(); 
});

const server = http.createServer(app);
const socketInstance = new Socket(server)
const chatInstance = new Chat(socketInstance.io);

eventRouter(socketInstance.io);





const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
