var NBS = NBS || {}; // since we don't know the load order, either use NBS or if it doesn't yet exist, create a new empty object for it.

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
