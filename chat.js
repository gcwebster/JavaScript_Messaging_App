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

