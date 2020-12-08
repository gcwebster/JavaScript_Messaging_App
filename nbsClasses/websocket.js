var NBS = NBS || {}; // since we don't know the load order, either use NBS or if it doesn't yet exist, create a new empty object for it.

NBS.websocket = class Websocket {
  constructor() {
    this.ws = new WebSocket("ws://127.0.0.1:8080");
  }
};
