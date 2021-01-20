var NBS = NBS || {};

NBS.initSignIn = () => {
  const ws = new NBS.websocket();
  console.log("begin sign in.");

  function handleSignIn(name) {
    ws.ws.send(["sign in logged: ", name]); // first ws is local websocket, second  ws is from  class  websoocket.js
    // NBS.user = name;
    window.location = `http://127.0.0.1:5500/main.html?user=${name}`;
  }

  document.getElementById("signInSubmit").onclick = () =>
    handleSignIn(document.getElementById("nameInput").value);
};
