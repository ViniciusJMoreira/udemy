'use strict';

// is a piece of code where we can reuse several times
// calling / running / invoking function

function logger() {
  console.log('My names is vinicius');
}

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const fruit = `Juice with ${apples} apples and ${oranges} oranges.`;
  return fruit;
}

logger();
logger();
logger();

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));