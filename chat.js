var NBS = NBS || {};

NBS.init = function () {
  // find a way to automatically generate users with some sort of user name
  const greyUser = new NBS.person("user1");
  const greenUser = new NBS.person("user2");

  const ws = new WebSocket("ws://127.0.0.1:8080");

  document.getElementById("sender1").onclick = function () {
    const message = getMessage();
    ws.send([message, "user1"]);
  };

  document.getElementById("sender2").onclick = function () {
    const message = getMessage();
    ws.send([message, "user2"]);
  };

  // server recieves our array message as a string, need to get server to respond back as an array/json
  ws.onmessage = (recievedMessage) => {
    console.log(recievedMessage);
    const messageData = recievedMessage.data[0];
    if (recievedMessage.data[1] === "user1") {
      greyUser.addMessage(messageData);
    } else {
      greenUser.addMessage(messageData);
    }
  };

  const getMessage = () => document.getElementById("messageInput").value;
};

// will need to move Person into it's own file because it's repeated code seperate to the chat.js functionality
NBS.person = class Person {
  constructor(className) {
    this.className = className;
  }

  addMessage = (message) => {
    const html = `<div class='messageBubble'><p>${message}</p></div>`;
    const newMessage = document.createElement("div");
    newMessage.innerHTML = html;
    newMessage.setAttribute("class", this.className);
    document.getElementById("messagingBody").appendChild(newMessage);
  };
};
