const arr = [1 ,2 ,3 ,4];
const findEl = function(element) {
  const result = arr.find((el) => el === element);
  // Prevent : Null and Undefined
  return result ?? "Not find";
}
console.log(findEl(5));
