// == is equal to the value but, not the type
const age = '18';
if(age == 18)console.log('You just became an adult.');

// === is equal to the value and the type
if(age === 18)console.log('You just became an adult.');

const favoriteNumber = undefined;
if(typeof favoriteNumber === 'number') console.log('Ok , it is a number type!');
else if(typeof favoriteNumber === 'string')console.log(`Ok , it is a string type!`);
else if(typeof favoriteNumber === 'boolean')console.log(`Ok , it is a boolean type!`);
else if
  (typeof favoriteNumber !== 'number' ||
  typeof favoriteNumber !== 'string' ||
  typeof favoriteNumber !== 'boolean') 
console.log(`The value is not a primitive type. it is a ${typeof favoriteNumber} type`);