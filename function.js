// Function
// - funcamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(pram1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g createCardAndPoint -> createCard, createCardAndPoint
// function is object in JS
function printHello() {
  console.log("hello");
}

printHello();

function log(message) {
  console.log(message);
}

log("Hello@");
log(1234);

//  2. Parameters
//  premitive parameters: passed by value
//  object parameters: passes by reference
function changeName(obj) {
  obj.name = "coder";
}
const woo = { name: "woo" };
changeName(woo);
console.log(woo);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  // if (from === undefined) {
  //   from = "unknown";
  // }
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

// 3. Rest parameters (added in ES6) - array style
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
printAll("dream", "coding", "woo");
