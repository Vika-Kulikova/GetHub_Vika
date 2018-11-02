;(function () {
    function User(userName, chat) {
        this.userName = userName;
        let default_chat;

        /**
         * Default chat
         */
        this.chatDefault = function () {
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
})();