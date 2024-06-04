'use-strict'
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(arr.slice(0,1));
// console.log(arr.slice(2,3));
// console.log(arr.slice(2,4));
// console.log(arr.slice(3,5));
// console.log(arr.slice(2));
// console.log(arr.slice(-2));

// SPLICE
arr.splice(-2);
// console.log(`Splice: ${arr}`);
arr = ["a", "b", "c", "d", "e"];

// REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'].reverse();
// console.log(`Reverse: ${arr2}`);

// CONCAT
const letters = arr.concat(arr2);
// [...arr, ...arr2];
// console.log(`Concat: ${letters}`);

// JOIN
// console.log(`Join: ${letters.join('-')}`);

// AT
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log(arr.at(0));
// console.log(arr.at(2));

//FOREACH
for (const [i,letter] of Object.entries(letters)) {
  // console.log(`Letter n.${i} = ${letter}`);
}
letters.forEach((letter,i,arr) => {
  // console.log(`Letter n.${i} = ${letter}`);
  // console.log(arr);
})

// MAP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsMap = movements.map(mov => mov*2);
// console.log(movementsMap);

// filter
const deposits = movements.filter(mov => mov > 0);
const withdrawal = movements.filter(mov => mov < 0);
// console.log(deposits, withdrawal);


// REDUCE
let currentBalance = 1080;
currentBalance = movements.reduce((acc,mov) => acc + mov , currentBalance);
// console.log(currentBalance);
const maxValue = movements.reduce((acc,mov) => {
  if (acc > mov) return acc;
  else return mov;
});
console.log(maxValue);

//SORT
const sortMovements = movements.sort((a,b) => b-a);
// console.log(sortMovements);
