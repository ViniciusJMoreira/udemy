// 5 falsy values: 0 , '' , undefined , null , NaN

const result = '';

console.log(`Zero is `, Boolean(0));
console.log(`String empty is `, Boolean(''));
console.log(`Undefined is `, Boolean(undefined));
console.log(`Null is `, Boolean(null));
console.log(`Nan is `, Boolean(NaN));
console.log(`Array empty is `, Boolean([]));
console.log(`Object empty is `, Boolean({}));

const money = 0;

if(money) console.log('Dont spend it all');
else console.log('you should get a job');