const { Server } = require("socket.io");

class Socket{
    constructor(server){
        
        this.io = server && new Server( server ,{
            cors: {
                origin: "https://web-chat-pied.vercel.app/"
            }
        });

        if(!Socket.instance) Socket.instance = this;

        return Socket.instance
    }
}


module.exports = Socket