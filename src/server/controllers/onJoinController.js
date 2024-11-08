const Chat = require("../class/Room/chat");
const { EVENT_ON } = require("../constants/event");

function onJoinController(socket,user) {
    const chatInstance = new Chat();

    if (chatInstance.addUser(user,socket)) {
        socket.handshake.query.user = {...user};
        socket.broadcast.emit(EVENT_ON.ONJOIN, user);
        const users = chatInstance.getListUser();
        socket.emit('onListUser',users);
        chatInstance.sendMsgEvent(`${user.nick} has joined the chat`);
    } else {
        socket.emit(EVENT_ON.ONREJECTED, `The nick "${user.nick}" is already in use.`);
    }
}

module.exports = onJoinController;
