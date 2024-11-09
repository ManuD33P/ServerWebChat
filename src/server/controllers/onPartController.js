const Chat = require('../class/Room/chat');
const { EVENT_EMIT } = require('../constants/event');
function onPartController(socket, reason){
    const chatInstance = new Chat();
    const {user} = socket.handshake.query;
  
    if(user){
        if(chatInstance.remUser(user)){
            chatInstance.sendMsgEvent(`${user.nick} has left`);
            socket.broadcast.emit(EVENT_EMIT.ONPART,user);
        } 
    }
    console.log("Desconectado del servidor de Socket.IO");
}


module.exports = onPartController