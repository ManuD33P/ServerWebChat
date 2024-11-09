const { Server } = require("socket.io");
const { FRONT_ENDPOINT } = process.env; // Importar la variable de entorno
class Socket{
    constructor(server){
        
        this.io = server && new Server(server, {
            cors: { 
                origin: FRONT_ENDPOINT, 
                methods: ["GET", "POST"], 
                credentials: true 
            },
            pingInterval: 25000,
            pingTimeout: 60000,
        });

        if(!Socket.instance) Socket.instance = this;

        return Socket.instance
    }
}


module.exports = Socket