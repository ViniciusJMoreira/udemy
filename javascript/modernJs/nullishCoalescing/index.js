const arr = [ 0 , 1 , 2 , undefined , 3 , null , 4 , false];

const valueAnalysis = function (...arg) {
  for (let i = 0; i < arg.length; i++) {
    // Prevent : Null and Undefined
    arg[i] ?? console.log(`${arg[i]}`);
  }
};
// valueAnalysis(...arr);

const findEl = function(element) {
  const result = arr.find((el) => el === element);
  // Prevent : Null and Undefined
  return result ?? "Not find";
}
// console.log(findEl(5));