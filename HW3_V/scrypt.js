;(function () {

        function Chat(chatName) {
            this.chatName = chatName;
            Chat.chats = [];
            this.chatUsers = [];
            this.chatHistory = [];
            this.unreadMessages = [];

            if (chatName == null) {
                throw new Error('Enter a chat-name')
            }

            /**
             * add user to chat2
             * @param user
             */
            this.enabledUser = function (user) {
                if (this.chatUsers.indexOf(user.userName) === -1) {
                    this.chatUsers.push(user.userName);
                } else {
                    alert("User: " + user.userName + " already connected to the chat: " + this.chatName)
                }
            };

            /**
             * delete user from chat2
             * @param user
             */
            this.disabledUser = function (user) {
                if (this.chatUsers.indexOf(user.userName) !== -1) {
                    this.chatUsers.splice(this.chatUsers.indexOf(user.userName), 1)
                    alert("User: " + user.userName + " disconnected from the chat: " + this.chatName)
                }
            };

            this.sendMessage = function (user, str) {
                let message;

                if (user === undefined || str === undefined) {
                    throw new Error('Enter all parameters')
                } else {
                    if (this.chatUsers.indexOf(user.userName) !== -1) {
                        message = new Message(user, str);
                        this.chatHistory.push(message);
                    } else {
                        throw new Error('User: \'' + user.userName + '\' isn\'t registered in ' + this.chatName + '-chat.')
                    }
                }
                console.log('new message: ' + message.message);
                // return message.message;
            };

            /**
             * log history chat
             * @param index
             * @param num
             */
            this.logHistoryMessage = function (index, num) {
                let messages;
                let chatHictory = [];
                let logMessage;
                if (index !== undefined && num !== undefined) {
                    messages = this.chatHistory.slice(index, num + 1);
                } else if (index !== undefined && num === undefined) {
                    messages = this.chatHistory.slice(0, index);
                } else if (index === undefined && num === undefined) {
                    messages = this.chatHistory.slice(0, 10);
                }
                for (let i = 0; i < messages.length; i++) {
                    logMessage = messages[i];
                    chatHictory.push('[' + logMessage.userName + '] ' +
                        '{User connecting: ' +
                        (this.chatUsers.indexOf(logMessage.userName) !== -1) + '} '
                        + '[' + logMessage.today + '] ' + ': '
                        + logMessage.message + '\n');
                }
                console.log('history ' + this.chatName + ' chat: \n' + chatHictory);
            };

            this.getUnreadMessages = function (user, num) {
                // let unreadMessages = [];
                let message;
                for (let i = 0; i < this.chatHistory.length; i++) {
                    message = this.chatHistory[i];
                    if (!message.isReadByUser(user)) {
                        if (num === undefined || num > this.unreadMessages.length) {
                            this.unreadMessages.push(message.message);
                            message.markAsReadByUser(user)
                        }
                    }
                }
                console.log('unreadMessages: ' + this.unreadMessages);
                // return this.unreadMessages
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
            // return this.chats;
        };


        /**
         *
         * @param userName
         * @constructor
         */
        function User(userName) {
            this.userName = userName;
            let default_chat;

            if (userName == null) {
                throw new Error('Enter a User-name')
            }

            // this.checkUser = function () {
            //     if (userName == null) {
            //         throw new Error('Enter a User-name')
            //     }
            // };

            /**
             * Default chat
             */
            this.chatDefault = function (chat) {
                if (chat !== null) {
                    default_chat = defaultChat;
                }
            };

            /**
             * Add User to a chat
             * @param chat
             */
            this.addUserToChat = function (chat) {
                if (chat == null) {
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
                let message;
                message = new Message(this, str);
                if (chat == null) {
                    defaultChat.chatHistory.push(message);
                } else {
                    chat.chatHistory.push(message);
                }
            };

            /**
             *
             * @param chatInput
             * @param numInput
             */
            this.readMessage = function (chatInput, numInput) {
                let logMessage;
                let readMessage = [];

                let chat = chatInput;
                let start = 0;
                let end = numInput + 1;

                if (chatInput !== undefined && numInput === undefined) {
                    if (typeof chatInput == "object") {
                        chat = chatInput;
                        start = -10;
                        end = chat.chatHistory.length;
                    } else if (typeof chatInput == "number") {
                        chat = default_chat;
                        start = -chatInput;
                        end = default_chat.length;
                    }
                }
                let messages = chat.chatHistory.slice(start, end);
                if (chat.chatUsers.indexOf(this.userName) !== -1) {
                    for (let i = 0; i < messages.length; i++) {
                        logMessage = messages[i];
                        readMessage.push('[' + this.userName + '] '
                            + '{User connecting: ' + (chat.chatUsers.indexOf(this.userName) !== -1) + '} ' +
                            '[' + logMessage.today + '] ' + ': ' + logMessage.message);
                    }
                } else {
                    readMessage.push('[' + this.userName + '] ' + '{User connecting: ' + (chat.chatUsers.indexOf(this.userName) !== -1) + '}');
                }
                console.log(readMessage);
            }
        }

        /**
         *
         * @param user
         * @param str
         * @constructor
         */
        function Message(user, str) {
            this.message = str;
            const date = new Date();
            this.today = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds();
            this.userName = user.userName;
            this.userWhoReadMessage = [];

            this.markAsReadByUser = function (user) {
                if (!this.isReadByUser(user)) {
                    this.userWhoReadMessage.push(user.userName);
                }
            };

            this.isReadByUser = function (user) {
                return this.userWhoReadMessage.indexOf(user.userName) !== -1
            };
        }


// CHATS
        let defaultChat = new Chat("DefaultChat");

        let chat1 = new Chat("CHAT1");

        let chat2 = new Chat("CHAT2");

        let chat3 = new Chat("CHAT3");


// USERS
        let userdef = new User("dadName", defaultChat);
        // userdef.checkUser();
        userdef.chatDefault();

        let userVP = new User("Vasia Pupkin", defaultChat);
        // userVP.checkUser();
        userVP.chatDefault();

        let userPupkin = new User("Pupkin", defaultChat);
        // userPupkin.checkUser();
        userPupkin.chatDefault();

        let userKolia = new User("Kolia", defaultChat);
        // userKolia.checkUser();

        let userSveta = new User("Sveta");
        // userSveta.checkUser();
        userSveta.chatDefault();

        let userNotDefault = new User("Not Default");
        // userNotDefault.checkUser();
        userNotDefault.chatDefault();

        let userJulia = new User("Julia");
        // userJulia.checkUser();
        userJulia.chatDefault();

        let userDima = new User("Dima");
        // userDima.checkUser();
        userDima.chatDefault();

        // let userOlia = new User();
        // userOlia.checkUser();


//Add users to chat

        // add users to chat 1
        chat1.enabledUser(userVP);
        chat1.enabledUser(userPupkin);
        chat1.enabledUser(userKolia);

        // add users to chat 2
        chat2.enabledUser(userVP);
        chat2.enabledUser(userSveta);
        chat2.enabledUser(userJulia);
        chat2.enabledUser(userDima);

        // add users to chat 3
        chat3.enabledUser(userdef);
        chat3.enabledUser(userVP);

        userdef.addUserToChat();
        userVP.addUserToChat();
        userPupkin.addUserToChat(chat3);
        userNotDefault.addUserToChat();
        userSveta.addUserToChat();

//Remove users from chat
//     chat1.disabledUser(userKolia);
//     chat1.disabledUser(userdef);

        // userdef.removeUserFromChat();
        // userJulia.removeUserFromChat(chat2);
        // userSveta.removeUserFromChat();

//send message
        chat2.sendMessage(userSveta, "Hello i'm message from " + userSveta.userName);
        chat2.sendMessage(userVP, "Hello i'm message from " + userVP.userName);
        chat2.sendMessage(userJulia, "Hello i'm second message from " + userJulia.userName);
        chat2.sendMessage(userDima, "Hello i'm second message from " + userDima.userName);


        chat3.sendMessage(userdef, "Hello i'm message from " + userdef.userName);
        chat3.sendMessage(userVP, "Hello i'm message from " + userVP.userName);
        chat3.sendMessage(userdef, "Hello i'm second message from " + userdef.userName);
        chat3.sendMessage(userVP, "Hello i'm second message from " + userVP.userName);

        // chat3.sendMessage(userVP);


        chat3.getUnreadMessages(userVP, 2);
        chat2.getUnreadMessages(userJulia);
        chat2.getUnreadMessages(userSveta);


        userdef.sendMessage('125354', chat2);
        userDima.sendMessage('sfsefs');
        userDima.sendMessage('zsfddfgd');
        userDima.sendMessage('sdfsdfg sdf ');
        userDima.sendMessage('ere trt e');
        // userDima.sendMessage('message default');

//read message
        userJulia.readMessage(chat2, 2);
        userJulia.readMessage(chat2, 1);
        userJulia.readMessage(chat2);
        userSveta.readMessage(2);

        userDima.readMessage(chat3, 2);
        // userDima.readMessage(2);
        // userDima.readMessage(chat2);

        Chat.chats.push(chat1);
        Chat.chats.push(chat2);
        Chat.chats.push(chat3);
        Chat.chats.push(defaultChat);
        Chat.getAllChats(chat2);
        Chat.getAllChats(chat1);
        Chat.getAllChats(chat3);


        chat3.logHistoryMessage(1, 2);
        chat3.logHistoryMessage(4);
        chat2.logHistoryMessage();
//     chat2.logHistoryMessage(1, 2);
//     chat2.logHistoryMessage(1);
//     chat2.logHistoryMessage();
    }

)();

