// Reference primitive type
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1,n2);

// Reference types
let age = [21,21,21];
let oldAge = age;
age.push('1000');
console.log(age,oldAge);

// Copyng Objects
const user = {
  firstName : 'Vinicius',
  age : 31
}

const userCopy = Object.assign({},user);
userCopy.age = 10;
console.log(user, userCopy);