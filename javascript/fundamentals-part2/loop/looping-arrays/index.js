const john = [
  'John',
  'Miller',
  2024 - 1993,
  'Developer',
  ['Jay', 'Marks', 'Michael']
];

const mark = [];

// for (let i = 0; i < john.length; i++) {
//   console.log(john[i], typeof john[i]);
//   // filling mark array
//   // mark[i] = typeof john[i];
//   mark.push(typeof john[i]);
// }

// for (const item of john) {
//   console.log(item, typeof item);
//   mark.push(typeof item);
// }

// console.log({mark});

const years = [1993 , 2001 , 1996 , 2005];
const ages = [];
const currentYear = new Date().getFullYear();

// for (let i = 0; i < years.length; i++) {
//   // ages[i] = currentYear - years[i];
//   ages.push(currentYear - years[i]);
// }

// for (const item of years) {
//   ages.push(currentYear - item);
// }

// console.log(ages);

// continue and break

// console.log('--ONLY STRINGS--');
// for (let i = 0; i < john.length; i++) {
//   if(typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }

// for (const item of john) {
//   if(typeof item !== 'string') continue;
//   console.log(item)
// }


// console.log('--BREAK NUMBER--');
// for (let i = 0; i < john.length; i++) {
//   if(typeof john[i] === 'number') break;
//   console.log(john[i]);
// }

// for (const item of john) {
//   if(typeof item === 'number') break;
//   console.log(item);
// }

/////////////////////////////////////////////

const characters = [
  {
    race: 'paladin',
    level: 7,
    attack: 50
  },
  {
    race: 'mage',
    level: 9,
    attack: 65
  },
  {
    race: 'mage',
    level: 12,
    attack: 82
  },
  {
    race: 'knight',
    level: 14,
    attack: 150
  },
  {
    race: 'druid',
    level: 15,
    attack: 75,
    bag: ['sword-poison', 'sword-viper']
  },
  [15,20,56]
]
const mage = [];
// for (let i = 0; i < characters.length; i++) {
//   if(characters[i].race !== 'mage') continue;
//   mage.push(characters[i]);
// }
// for (const item of characters) {
//   if (item.race !== 'mage') continue;
//   mage.push(item);
// }
// console.log(mage);

// for(let i = 0; i < characters.length; i++) {
//   if(!Array.isArray(characters[i])) continue;
//   for(let j = 0; j < characters[i].length; j++) {
//     console.log(characters[i][j]);
//   }
// }
// for (const arr of characters) {
//   if(!Array.isArray(arr)) continue;
//   for (const item of arr) {
//     console.log(item);
//   }
// }