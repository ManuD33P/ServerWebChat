
const Chat = require("../class/Room/chat");
const { EVENT_ON } = require("../constants/event");

function onUpdateDataController(socket,newData){
    const chatInstance = new Chat();
    const {user} =  socket.handshake.query;
    if(chatInstance.isExists(user)){
        const newUser = chatInstance.updateDataUser(user,newData,socket);
        socket.handshake.query.user = newData;
        const users = chatInstance.getListUser();
        console.log(users)
        chatInstance.sendEvent('onListUser',users);
    }
}


module.exports = onUpdateDataController