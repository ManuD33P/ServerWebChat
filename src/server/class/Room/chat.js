const ListUser = require('../User/listUser');
const {EVENT_ON} = require('../../constants/event')
class Chat extends ListUser{
    constructor(io){
        super();
        this.io = io;
        if(!Chat.instance) Chat.instance = this;
        return Chat.instance;
    }

    sendMsgEvent(msg){
        this.io.emit(EVENT_ON.PUBLIC_MESSAGE_EVENT, {message:msg, type:'event'});
    }

    sendEvent(event,value){
        this.io.emit(event,value)
    }

}


module.exports = Chat