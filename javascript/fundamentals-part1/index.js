// variable assignment

 // the value can change over time
let number = 0;
number = 1;

var boo = true;
boo = false;

// can't change over time
const string = 'Definited';

//when using a constant , it is necessary to assign an initial value , because here we get a bug.
// const anonymous;

// in this case it creates a property global object
globalProperty = 'Proprieta globale';
console.log(globalProperty);