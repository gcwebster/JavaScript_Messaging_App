var NBS = NBS || {};

NBS.init = function () {
  const greyUser = new NBS.person("user1");
  const greenUser = new NBS.person("user2");

  document.getElementById("sender1").onclick = function () {
    const message = getMessage();
    greyUser.addMessage(message);
  };

  document.getElementById("sender2").onclick = function () {
    const message = getMessage();
    greenUser.addMessage(message);
  };

  const getMessage = () => document.getElementById("messageInput").value;
};

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
