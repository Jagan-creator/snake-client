let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'u') {
    connection.write("Say: I'm winning!");
  } else if (key === 'i') {
    connection.write("Say: Snake get food");
  } else if (key === 'o') {
    connection.write("Say: Howdy!");
  } else if (key === 'p') {
    connection.write("Say: :D :D :D");
  }
};

module.exports = { setupInput };