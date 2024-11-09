const User = require('./user')

class ListUser{
    constructor(){
        this._users  = new Map()
    }

    addUser(user,socket){
        if(this._users.has(user?.nick)) return false //false = user is already in use, true= user joined.
        const newUser = new User(user,socket);
        this._users.set(user.nick,newUser);
        return true
    }

    remUser(user){
       return this._users.delete(user?.nick); //true = user is exists, false= user is not found 
    }

    isExists(user){
        return this._users.has(user?.nick);
    }

    getUser(user){
        return this._users.get(user?.nick)
    }

    getListUser(){
        const users = Array.from(this._users.values());

        const usersFiltredProps = users.map(user => {
            return { 
                nick : user.nick,
                avatar : user.avatar,
                personalMessage: user.personalMessage,
                status : user.status
            }
        });

        return usersFiltredProps
    }

    updateDataUser(holdData,newData,socket){
        this._users.delete(holdData.nick);
        const newUser = new User(newData,socket);
        this._users.set(newUser.nick,newUser);
    }
}


module.exports = ListUser