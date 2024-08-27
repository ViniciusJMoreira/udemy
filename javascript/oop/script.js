'use-strict';

const Person = function(firstname , dateBirthday) {
  // instance properties
  this.firstname = firstname;
  this.dateBirthday = dateBirthday;
}

const vinicius = new Person("Vinicius", 1993);
const sara = new Person("sara", 2001);
const jake = new Person("Jake", 1987);

console.log(vinicius,sara,jake);
console.log(vinicius instanceof Person);