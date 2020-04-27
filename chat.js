function sendMessage(x, message) {

  if (message) {
    let newMessage = document.createElement('div');
    newMessage.setAttribute("class", x === 1 ? "friendText" : "userText");
    newMessage.innerHTML = `<div class='messageBubble'><p>${message}</p></div>`;
    document.getElementById('newMessage').appendChild(newMessage);
  }

  document.getElementById('messageInput').value = "";
}