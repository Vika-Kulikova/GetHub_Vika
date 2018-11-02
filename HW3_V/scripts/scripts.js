// default chat2
let defaultChat = new Chat("DefaultChat");
defaultChat.checkChats();

let userdef = new User("dadName", defaultChat);
userdef.chatDefault();
userdef.addUserToChat();
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

let userJulia = new User("Julia");
userJulia.chatDefault();
userJulia.addUserToChat();
userJulia.sendMessage('sfsefsds315431543 11345dfsd ');


let userDima = new User("Dima");


let chat1 = new Chat("CHAT1");
chat1.checkChats();

userNotDefault.addUserToChat(chat1);
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


let chat2 = new Chat("CHAT2");
chat2.checkChats();

// add users to chat 2
chat2.enabledUser(userVP);
chat2.enabledUser(userSveta);
chat2.enabledUser(userJulia);
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
Chat.chats.push(defaultChat);
Chat.getAllChats(chat2);
Chat.getAllChats(chat1);

let message = new Message(userKolia, "Hello, I'm Kolia");
message.checkArg();
console.log('message: ' + message.today);

chat1.logHistoryMessage(1, 2);
chat1.logHistoryMessage(2);
chat1.logHistoryMessage();
chat1.sendMessage(userVP, "hello i'm message");