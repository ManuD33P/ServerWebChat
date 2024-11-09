const {EVENT_ON, EVENT_EMIT} = require('./constants/event')
//controllers
const onJoinController = require('./controllers/onJoinController');
const onMessageController = require('./controllers/onMessageController');
const onPartController = require('./controllers/onPartController');
const onPrivateMessageController = require('./controllers/onPrivateMessageController');
const onListUsersController = require('./controllers/onListUsersController');
const onUpdateDataController = require('./controllers/onUpdateDataController');
/*
    function to socket configuration 
    use the controllers functions.
*/




module.exports = (io) => {
    io.on('connection', (socket)=>{
        console.log(`Usuario ingreso al server`)
            //event's of conection
        const findInfoUser = socket.handshake.query?.user;

        if(findInfoUser) { onJoinController(socket,findInfoUser)}
        
        socket.on(EVENT_ON.ONJOIN, (UserObj) => onJoinController(socket, UserObj))
        socket.on(EVENT_ON.ONPART, (reason) => onPartController(socket, reason))
           //event's of messages
        socket.on(EVENT_EMIT.SENDMESSAGE, (message) => onMessageController(socket,message))
        socket.on(EVENT_EMIT.SENDPM, (content) => onPrivateMessageController(socket,content))
        socket.on('getListUser', ()=> onListUsersController(socket));
        socket.on('onUpdateDataUser', (newData) => onUpdateDataController(socket,newData))
    })
}