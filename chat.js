var NBS = NBS || {};

NBS.init = (
  function () {
    NBS.User1 = new NBS.person('user1', 'sender1');
    NBS.User2 = new NBS.person('user2', 'sender2');


    // Make a message object and  initalise it for the bottom two.
    document.getElementById('sender1').onclick = function () {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          NBS.User1.addMessage(this.responseText); // We can't parse through this object
        }
      };
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/comments/1", true);
      xhttp.send();
    }


    // Homework - replace above function for user 1 with using fetch instead
    document.getElementById('sender2').onclick = function () {
      var messageText = document.getElementById("messageInput").value;
      NBS.User2.addMessage(messageText);
    }
  }
)

NBS.person = (
  function (className) {
    var _className = className; // Can't be accessed outside of scope

    function addMessage(message) {
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

