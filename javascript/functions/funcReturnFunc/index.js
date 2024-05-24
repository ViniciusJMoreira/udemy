'use-strict';
// traditional function return function
function greet (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

// return arrow function
const greetArrFun = greeting => name => console.log(`${greeting} ${name}`);

// challeng
const greeterHey = greet('Hey');
greeterHey('Vinicius');
greetArrFun('Hello')('Maria');