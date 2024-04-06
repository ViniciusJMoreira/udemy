const age = 15;
const condition = age >= 18;
if(condition) {
  console.log('Sara can start driving license.🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`sara is too young. Wait another ${yearsLeft} years`)
}

const birthYear = 2000;
let century;

if (birthYear >= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);