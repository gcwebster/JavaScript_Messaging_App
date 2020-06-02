function sendMessage(userNumber, message) {
  if (message) {
    var newMessage = document.createElement('div');
    newMessage.setAttribute(
      "class",
      userNumber === 1 ? "friendText" : "userText"
    );
    newMessage.innerHTML = `<div class='messageBubble'><p>${message}</p></div>`;
    document.getElementById('messagingBody').appendChild(newMessage);
  }
  document.getElementById('messageInput').value = "";
}


var person = (
  function (className) {
    var className = className; // Can't be accessed outside of scope
    function addMessage(message) {
      var html = `<div class='messageBubble'><p>${message}</p></div>`;
      var newMessage = document.createElement('div');
      newMessage.innerHTML = html; newMessage.setAttribute("class", className);
      document.getElementById('messagingBody').appendChild(newMessage);
      console.log('reached add message with parameter ' + message);
    }

    function getClassName() {
      return className;
    }

    function setClassName(newClassName) {
      className = newClassName;
    }

    return {
      addMessage: addMessage,
      getClassName: getClassName,
      setClassName: setClassName
    };
  }
);


var user1 = person("friendText");
var user2 = person("userText");

