'use-strict'

const personagens = require("../personagens.js");

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

// A SOMA DE UM ELENCO DE NUM
let currentBalance = 1080;
currentBalance = movements.reduce((acc,mov) => acc + mov , currentBalance);
// console.log(currentBalance);

// MAXIMO VALOR DE UM ELENCO DE NUM
const maxValue = movements.reduce((acc,mov) => {
  if (acc > mov) return acc; //[200, 450, -400, 3000, -650, -130, 70, 1300]
  else return mov;
},0)
// console.log(maxValue);

// CONTAGEM PARA CADA ELEMENTO REPETIDO
const lettere = ["a", "b", "c", "a", "b", "c", "d"];
const conteggio = lettere.reduce((acc, lettera) => {
  if (!acc[lettera]) {
    acc[lettera] = 0;
  }
  acc[lettera]++;
  return acc;
}, {});
// console.log(conteggio); // Output: { a: 2, b: 2, c: 2, d: 1 }

const paladinos = personagens.reduce((acc,personagem) => {
  if(acc[personagem.classe]) acc[personagem.classe].push(personagem);
  else if(personagem.classe === 'Paladino') acc[personagem.classe] = [personagem];
  return acc;
}, {})
// console.log(paladinos);
