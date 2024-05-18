"use-strict";

const map = new Map()
  .set(1, "Java")
  .set(2, "PHP")
  .set(3, "Javascript")
  .set(4, "Python")
  .set(true, "Correct🎉, the right answer is Javascript")
  .set(false, "Wrong Choice😢");
// console.log(map);
const question = map.get('question');
const asnwer = 'Javascript'; // input
console.log(map.get('question'));
for (const [key,value] of map) {
  if(typeof key !== 'number') continue;
  console.log(`${key}: ${value}`);
}
console.log(map.get(map.get(3) === asnwer));