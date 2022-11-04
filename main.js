#!/usr/bin/env node
const { helpFn } = require('./Commands/help');
const { organizeFn } = require("./Commands/organize");
const { treeFn } = require("./Commands/tree");


let input = process.argv.slice(2); // slice will trunc first two content form process.argv array  => Node ./fo.js

let cmd = input[0]; // organize

// entry point for all function :
switch (cmd) {
  case "Tree":      
    treeFn();
    break;
  case "organize":
    organizeFn(); // passing path of testFile Dir ['M:\pep\NodeJs\Project-Node\testFile']
    break;
  case "help":
    helpFn();
    break;
  default: {
    console.log("Plaese enter a content id entry");
  }
}
