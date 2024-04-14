const user = {
  firstName: 'Vinicius',
  lastName: 'Junqueira',
  age: 2022 - 1993,
  job: 'Developer',
  friends: ['Michael', 'Jonas', 'Jay']
};

console.log(user.firstName);
console.log(user['lastName']);

const nome = 'Name';

console.log(user['first'+nome]);
console.log(user['last'+nome]);

const property = 'Job';
console.log(user[property]??'Wrong request.');

user.location = 'Italy';
user['instagram'] = 'viniicius.dev';
console.log(user);
console.log(`${user.firstName} has ${user.friends.length} friends , and his best friend is called ${user.friends[0]}`);