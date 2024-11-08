const {EVENT_ON} = require('../../constants/event')


class User{
    constructor({nick,avatar,personalMessage,status},socket){
         this.nick= nick,
         this.avatar= avatar,
         this.personalMessage= personalMessage,
         this.status= status
         this.socket=socket;
    }


     recivedMessage(msg,userEmit){ //recived messagePrivate.
        this.socket.emit(EVENT_ON.ONPM, {user: userEmit, message: msg});
     }

     publicMessage(msg){  //send message public
        this.socket.broadcast.emit(EVENT_ON.PUBLIC_MESSAGE, { user: this, message: msg });
     }
}



module.exports = User;