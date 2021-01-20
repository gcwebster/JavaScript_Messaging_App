var NBS = NBS || {};

NBS.init = function () {
  // find a way to automatically generate users with some sort of user name
  // just the one page but context depends on what user enters as their name
  // we can switch the green and grey user depending upon which user is signed in!
  // look at how to store these messages so they persist between loads (class for messages that contains an array?)

  console.log("on the main page and user is: ", NBS);
  // creating a user and assigning them to NBS object isn't working as NBS object is only for this page.

  const path = window.location.search; // will return?user=<userName>
  const user = path.split("=")[1]; // splits into an array of two parts, split occurring at '=' sign, return second element
  console.log("user is ", user);

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

  ws.onmessage = (recievedMessage) => {
    const messageData = recievedMessage.data.split(",");
    const messageContent = messageData[0];
    const responseUser = messageData[1];

    if (responseUser === "user1") {
      greyUser.addMessage(messageContent);
    } else {
      greenUser.addMessage(messageContent);
    }
  };

  const getMessage = () => document.getElementById("messageInput").value;
};
