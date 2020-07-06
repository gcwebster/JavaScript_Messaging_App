var NBS = NBS || {};

NBS.init = {

  function() {

    NBS.User1 = new NBS.person('user1');
    NBS.User2 = new NBS.person('user2');

    function sendMessageUser1() {
      console.log('called  function send message user 1')
      NBS.User1.addMessage('a');
    }
    function sendMessageUser2() {
      console.log('called  function send message user 2')
      NBS.User2.addMessage('b');
    }

    return {
      sendMessageUser1: sendMessageUser1,
      sendMessageUser2: sendMessageUser2
    }
  }
}

NBS.person = (
  function (className) {
    var _className = className; // Can't be accessed outside of scope

    function addMessage(message) {
      console.log('reached add message with parameter ' + message);
      var html = `<div class='messageBubble'><p>${message}</p></div>`;
      var newMessage = document.createElement('div');
      newMessage.innerHTML = html; newMessage.setAttribute("class", _className);
      document.getElementById('messagingBody').appendChild(newMessage);
    }

    function getClassName() {
      return _className;
    }

    function setClassName(newClassName) {
      _className = newClassName;
    }

    return {
      addMessage: addMessage,
      getClassName: getClassName,
      setClassName: setClassName
    };
  }
);

