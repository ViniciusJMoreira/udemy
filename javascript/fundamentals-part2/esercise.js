const printForecast = function (arr) {
  let message = ``;
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') continue;
    message += `...${arr[i]}°C in ${i + 1} days.\n`;
  }
  return message;
}
const DATA1 = [17, 21, 23];
const DATA2 = [12, 5, -5, 0, 4];

console.log(printForecast(DATA1));
console.log(printForecast(DATA2));

// invert a string

const string = 'hello';
let reverseString = '';
const array = [];
for(let i = 0; i < string.length; i++) {
  array[i] = string[i];
}
console.log(array,string);
for(let i = array.length-1; i >= 0; i--) {
reverseString += string[i];
}
console.log(array,string, reverseString);