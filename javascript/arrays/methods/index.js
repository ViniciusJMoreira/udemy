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
const personagensNivel = personagens.map((peronagem) => peronagem.nivel);
// console.log(movementsMap, personagensNivel);

// FILTER
// Retorna um array de todos elementos que entra na condicao
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

// TRANSFORMACAO DE DADOS , AGRUPANDO PERSONAGENS POR CLASSES
const classes = personagens.reduce((acc,personagem) => {
  if(acc[personagem.classe]) acc[personagem.classe].push(personagem);
  else acc[personagem.classe] = [personagem];
  return acc;
}, {})
// console.log(paladinos);

// FIND
// Retorna um valor somente que entra na condicao
const mago = personagens.find( personagem => {
  if(personagem.classe === 'Mago' && personagem.nivel > 40) return personagem 
});
// console.log(mago);

let result;
for (const personagem of personagens) {
  if(personagem.classe === 'Mago' && personagem.nivel > 40){result = personagem; break}
}
// console.log(result);

// INCLUDES
const include = letters.includes('a');
// console.log(include);

// SOME
const some = personagens.some((personagem) => personagem.classe === "Mago");
// console.log(some);

// EVERY
const every = personagens.every((personagem) => personagem.nivel > 50);
// console.log(every);

// FLAT
arr = [
  "a",
  ["a1", ["a1.3", "a1.2"], "a2", ["a2.1", "a2.2"]],
  "b",
  ["b1", ["b1.1", "b1.2"], "b2", ["b2.1", "b2.2"]],
  "c",
  ["c1", ["c1.1", "c1.2"], "c2", ["c2.1", "c2.2"]],
];
const flat = arr.flat(2);
// console.log(flat);

// SORT
letters.sort((a,b) => {
  if(a > b) return -1;
  if(b > a) return 1;
});
// console.log(letters);

movements.sort((a,b)=> a - b);
// console.log(movements);