// this will need to be split out to its own VS code file later.
const WebSocket = require("ws");
console.log("server started");
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);

    wss.clients.forEach((client) => {
      client.send(message);
    });
  });
});
