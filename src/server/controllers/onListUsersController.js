const Chat = require("../class/Room/chat");
const { EVENT_ON } = require("../constants/event");

function onListUsersController(socket){
    const chatInstance = new Chat();
    const users = chatInstance.getListUser();
    socket.emit('onListUser',users);
}

module.exports = onListUsersController