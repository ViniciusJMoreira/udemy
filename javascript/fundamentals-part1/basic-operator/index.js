// Math operators
const now = 2030;
const ageJonas = now - 1991;
const ageMaria = now - 2018;

console.log(ageJonas * 2 , ageMaria/10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

const firstName = 'Vinicius';
const lastName = 'Moreira';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 20; // x = x + 20 = 35
x *= 2; // x = x * 35 = 70
x++ // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageMaria);
console.log(ageMaria >= 18); // > , < , >= , <=
console.log(18 <= now - 2018); // false