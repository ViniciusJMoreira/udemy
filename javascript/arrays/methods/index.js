'use-strict'
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(0,1));
console.log(arr.slice(2,3));
console.log(arr.slice(2,4));
console.log(arr.slice(3,5));
console.log(arr.slice(2));
console.log(arr.slice(-2));

// SPLICE
arr.splice(-2);
console.log(`Splice: ${arr}`);
arr = ["a", "b", "c", "d", "e"];

// REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'].reverse();
console.log(`Reverse: ${arr2}`);

// CONCAT
const letters = arr.concat(arr2);
// [...arr, ...arr2];
console.log(`Concat: ${letters}`);

// JOIN
console.log(`Join: ${letters.join('-')}`);
