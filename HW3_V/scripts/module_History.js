;(function () {

    function Chat(chatName) {
        this.chatName = chatName;
        Chat.chats = [];
        this.chatUsers = [];
        this.chatHistiry = [];
        this.message = [];

        /**
         * check param in constructor
         */
        this.checkChats = function () {
            if (chatName == null) {
                throw new Error('Enter a chat2-name')
            } else {
                alert(chatName)
            }
        }

        /**
         * add user to chat2
         * @param user
         */
        this.enabledUser = function (user) {
            this.chatUsers.push(user.userName);
        }

        /**
         * delete user from chat2
         * @param user
         */
        this.disabledUser = function (user) {
            if (this.chatUsers.indexOf(user.userName) !== -1) {
                this.chatUsers.splice(this.chatUsers.indexOf(user.userName), 1)
            }
        }


        this.sendMessage = function (user, str) {
            let message;
            if (this.chatUsers.indexOf(user.userName) !== -1) {
                message = new Message(user, str);
                this.chatHistiry.push(message);
                // return message;
                // alert(this.chatHistiry);
                // message(str)
            } else {
                throw new Error('You are not registered in this chat.')
            }
            console.log('new message: ' + message.message);
            return message.message;
        };

        /**
         * log history chat
         * @param index
         * @param num
         */
        this.logHistoryMessage = function (index, num) {
            let message;
            if (index !== undefined && num !== undefined) {
                message = this.message.slice(index, num + 1);
                // message = this.chatHistiry.slice(index, num + 1);
            } else if (index !== undefined && num == undefined) {
                message = this.message.slice(0, index);
            } else if (index == undefined && num == undefined) {

                message = this.message.slice(0, 10);
            }
            console.log('history message: ' + message);
        }

        this.getUnreadMessages = function (user, num) {
            let unreadMessages = [];
            for (let i = 0; i < this.chatHistiry.length; i++) {
                message = this.chatHistiry[i];
                if (!message.isReadByUser(user)) {
                    if (num == undefined || num > unreadMessages.length) {
                        unreadMessages.push(message);
                        message.markAsReadByUser(user)
                    }
                }
            }
            return unreadMessages
        }
    }

    /**
     * Static method the Chat-constructor
     * @param chat
     * @returns {Array}
     */
    Chat.getAllChats = function (chat) {
        this.chats.push(chat.chatName);
        console.log(this.chats);
        return this.chats;
    }



    function User(userName, chat) {
        this.userName = userName;
        let default_chat;

        this.checkUser = function () {
            if (userName === undefined) {
                throw new Error('Enter user name')
            }
        };

        /**
         * Default chat
         */
        this.chatDefault = function () {
            if (chat !== null) {
                default_chat = defaultChat;
            }
        };


        this.addUserToChat = function () {
            if (chat == undefined) {
                default_chat.enabledUser(this);

            } else {
                chat.enabledUser(this);
            }
        };

        /**
         * Remove User from a chat
         * @param chat
         */
        this.removeUserFromChat = function (chat) {
            if (chat == null) {
                default_chat.disabledUser(this);

            } else {
                chat.disabledUser(this);
            }
        };

        /**send message
         *
         * @param str
         * @param chat
         */
        this.sendMessage = function (str, chat) {
            if (chat == null) {
                defaultChat.message.push(str);
                console.log('default_chat: ' + defaultChat.message);
            } else {
                chat.message.push(str);
                console.log(chat.chatName + ': ' + chat.message);
            }
        }

        this.readMessage = function (chat, num) {
            let message;
            if (chat !== undefined && num !== undefined) {
                message = chat.message.slice(0, num + 1);
            } else if (chat !== undefined && num == undefined) {
                message = chat.message.slice(-10, chat.message.length);
            } else if (chat == undefined && num !== undefined) {
                message = default_chat.message.slice(-num, default_chat.message.length);
            }

            console.log(this.userName + ' read a Message: ' + message);
        }
    }

    function Message(user, message) {
        this.message = message;
        const date = new Date();
        this.today = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds();
        this.userName = user.userName;
        this.userWhoReadMessage = [];


        this.checkArg = function () {
            if (user == null || message == null) {
                throw new Error('Enter all parameters')
            } else {
                console.log(user.userName, this.message);
                alert(this.today);
            }
        }

        this.markAsReadByUser = function (user) {
            if (!this.isReadByUser(user)) {
                this.userWhoReadMessage.push(user.userName);
            }
        }

        this.isReadByUser = function (user) {
            return this.userWhoReadMessage.indexOf(user.userName) > -1
        };
    }


// Create default chat
    let defaultChat = new Chat("DefaultChat");
    defaultChat.checkChats();

// Create Chat 1
    let chat1 = new Chat("CHAT1");
    chat1.checkChats();

// Create Chat 2
    let chat2 = new Chat("CHAT2");
    chat2.checkChats();

// Create Chat 3
    let chat3 = new Chat("CHAT3");
    chat3.checkChats();


// Create Users
    let userdef = new User("dadName", chat3);
    userdef.checkUser();
    userdef.chatDefault();
    userdef.addUserToChat();

    // chat3.disabledUser(userdef);



    userdef.removeUserFromChat();


    let userNotDefault = new User("Not Default");
    userNotDefault.chatDefault();
    // userNotDefault.addUserToChat();

    let userVP = new User("Vasia Pupkin", defaultChat);
    userVP.chatDefault();
    userVP.addUserToChat();

    let userPupkin = new User("Pupkin", defaultChat);
    let userKolia = new User("Kolia", defaultChat);

    let userSveta = new User("Sveta");
    userSveta.chatDefault();
    userSveta.addUserToChat();
    userSveta.removeUserFromChat();

    let user_John = new User("John");
    user_John.chatDefault();
    user_John.addUserToChat();


    let userJulia = new User("Julia", chat2);
    userJulia.chatDefault();
    userJulia.addUserToChat();
    userJulia.sendMessage('sfsefsds315431543 11345dfsd ');


    let userDima = new User("Dima");




// add users to chat 1
    userNotDefault.addUserToChat(chat1);
    user_John.addUserToChat(chat1);

    userdef.sendMessage('lorem fnkjvf', chat1);
    userdef.sendMessage('sfsdf 1235', chat1);
    userDima.sendMessage('125354', chat1);


// add users to chat 1
    chat1.enabledUser(userVP);
    chat1.enabledUser(userPupkin);
    chat1.enabledUser(userKolia);

// delete users from chat 1
    chat1.disabledUser(userKolia);
    chat1.disabledUser(userdef);

// send message chat 1



// add users to chat 2
    chat2.enabledUser(userVP);
    chat2.enabledUser(userSveta);
    // chat2.enabledUser(userJulia);
    chat2.enabledUser(userDima);


    userdef.addUserToChat(chat2);
    userdef.sendMessage('125354', chat2);
    userDima.sendMessage('sfsefs', chat2);
    userDima.sendMessage('message default');


    userJulia.readMessage(chat2, 2);
    // userDima.readMessage(2);
    userDima.readMessage();

    Chat.chats.push(chat1);
    Chat.chats.push(chat2);
    Chat.chats.push(chat3);
    Chat.chats.push(defaultChat);
    Chat.getAllChats(chat1);
    Chat.getAllChats(chat2);
    Chat.getAllChats(chat3);

    let message = new Message(userKolia, "Hello, I'm Kolia");
    message.checkArg();
    console.log('message: ' + message.today);

    chat1.logHistoryMessage(1, 2);
    chat1.logHistoryMessage(2);
    chat1.logHistoryMessage();
    chat1.sendMessage(userVP, "hello i'm message");
})();

