'use-strict';


// Prevent : NaN , Null, Undefined, 0 , '', false
const 
let number = 10;
console.log(number || 10);



const arr = [1 ,2 ,3 ,4];
const findEl = function(element) {
  const result = arr.find(el => el === element);
  return result ||'Not find';
}
console.log(findEl(5));
// execute the next one only if the previous condition is true
