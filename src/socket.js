const { Server } = require("socket.io");
const { FRONT_ENDPOINT } = process.env; // Importar la variable de entorno
class Socket{
    constructor(server){
        
        this.io = server && new Server( server ,{
            cors: {
                origin: FRONT_ENDPOINT || "https://web-chat-pied.vercel.app"
            }
        });

        if(!Socket.instance) Socket.instance = this;

        return Socket.instance
    }
}


module.exports = Socket