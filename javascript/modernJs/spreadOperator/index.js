'use-strict';
// iterables: arrays, strings, maps, sets. NOT Object
const arr = ['Admin', 'User', 'Visitor'];
const acc = [...arr, 'Private'];
// console.log(...acc);

let str = 'spr';
str = [...str];
// console.log(str);

function spr(n1, n2, n3) {
  // console.log(n1,n2,n3);
}

const num = [23 , 22, 21];
spr(...num);
spr(...str);
spr(...arr);

// Join arrays
const concat = [...acc, ...arr, ...num];
// console.log(concat);

const obj = {
  n1: 1,
  n2: 2,
  n3: 3,
}

const cop = {...obj};
cop.n4 = 5;
// console.log(obj, cop);