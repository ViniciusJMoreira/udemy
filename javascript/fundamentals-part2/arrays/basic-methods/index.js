// add elements
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); // add to the last element
const newLength = friends.push('kely'); // return the length of the element
console.log(friends);
console.log(newLength);
friends.unshift('Jonas'); // add to the first element

// remove elements
friends.pop(); // remove to the last element
const element = friends.pop(); // returns the removed element
console.log(friends);
console.log(element);
friends.shift(); // remove to the first element
console.log(friends);

// index elements
console.log(friends.indexOf('Steven')); // return the index value of the element
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Bob'));