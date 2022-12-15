const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You have successfully connected to the server!");
    conn.write("Name: JH");
  });

  conn.on("data", data => {
    console.log(`Server Notification: ${data}`);
  });

  return conn;
};

module.exports = { connect };