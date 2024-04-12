const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = [friend1, friend2, friend3];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length -1]); // expression
friends[2] = 'Jay';
console.log(friends);

const user = ['vinicius', 'junqueira'];
const [firstName , lastName] = user;

console.log(firstName, lastName);

const calcAge = (year) => {
  return new Date().getFullYear() - year;
}
const years = [2010, 2011, 2000, 1993, 1996, 2005];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];

console.log(ages);