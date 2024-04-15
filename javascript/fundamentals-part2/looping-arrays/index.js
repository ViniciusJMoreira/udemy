const john = [
  'John',
  'Miller',
  2024 - 1993,
  'Developer',
  ['Jay', 'Marks', 'Michael']
];

const mark = [];

for (let i = 0; i < john.length; i++) {
  console.log(john[i], typeof john[i]);
  // filling mark array
  // mark[i] = typeof john[i];
  mark.push(typeof john[i]);
}

console.log(mark);

const years = [1993 , 2001 , 1996 , 2005];
const ages = [];
const currentYear = new Date().getFullYear();

for (let i = 0; i < years.length; i++) {
  // ages[i] = currentYear - years[i];
  ages.push(currentYear - years[i]);
}

console.log(ages);

// continue and break

console.log('--ONLY STRINGS--');
for (let i = 0; i < john.length; i++) {
  if(typeof john[i] !== 'string') continue;
  console.log(john[i]);
}
console.log('--BREAK NUMBER--');
for (let i = 0; i < john.length; i++) {
  if(typeof john[i] === 'number') break;
  console.log(john[i]);
}