// LECTURES
console.log(23 === 23.0);

//Based 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(parseFloat("2.5rem"));
console.log(parseInt("  2.5rem  "));

// checking if value is NaN
console.log(isNaN(20));
console.log(isNaN("20"));
console.log(isNaN(+"20X"));
console.log(isNaN(23 / 0));

// Checking if value is number
console.log(isFinite(20));
console.log(isFinite("20"));
console.log(isFinite(+"20X"));
console.log(isFinite(20 / 0));

console.log(Number.isInteger(20));
console.log(Number.isInteger("20"));
console.log(Number.isInteger(+"20X"));
console.log(Number.isInteger(20 / 0));