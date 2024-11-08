const Chat = require("../class/Room/chat");
const { EVENT_ON } = require("../constants/event");

function onMessageController(socket, message){
    const chatInstance = new Chat();
    const {user} = socket.handshake.query;
    if(chatInstance.isExists(user)){
        chatInstance.sendEvent(EVENT_ON.PUBLIC_MESSAGE,{user, message, type:'chat'})
    }
}


module.exports = onMessageController