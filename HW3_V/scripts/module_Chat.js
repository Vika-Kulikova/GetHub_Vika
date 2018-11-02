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
})();