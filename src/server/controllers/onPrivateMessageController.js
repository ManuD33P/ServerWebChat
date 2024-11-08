const Chat = require('../class/Room/chat');
const {EVENT_ON, EVENT_EMIT} = require('../constants/event');


function onPrivateMessageController(socket, {target,message}){
    const chatInstance = new Chat();
    if(!chatInstance.isExists(target)){
        socket.emit(EVENT_EMIT,`${target} is disconnect`)
    } else {
        const {user} = socket.handshake.query;
        const targetObject = chatInstance.getUser(target);
        targetObject.recivedMessage(message,user.nick)
    }
}


module.exports = onPrivateMessageController