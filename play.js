const net = require("net");
const { connect } = require('./client');

console.log("Connecting ...");
connect();

// setup interface to handle user input form their keyboard inputs

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);        // done so here
  return stdin;
};

// function for user input is below

const handleUserInput = function() {
  if (key === '\u0003') {
    process.exit();
  }
};