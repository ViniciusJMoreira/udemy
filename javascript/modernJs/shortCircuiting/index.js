'use-strict';
const number = 10;
// console.log(number || 10);

const data = [10 , undefined , 5 , NaN , 'String' , '' , true , 0 , 'Vinicius' , {} , [] ];
const valueAnalysis = function(...arg) {
  const arr = [];
  for (let i=0;i<arg.length;i++) {
    // Prevent : NaN , Null, Undefined, 0 , '', false
    arg[i] || console.log(`The argument at position number ${i} there was a short circuit, with the value ${arg[i]}`);
    // execute the next one only if the previous condition is true
    arg[i]&&arr.push(arg[i]);
  }
  return arr ?? "Something went wrong ";
}
const result = valueAnalysis(...data);
console.log({data, result});

