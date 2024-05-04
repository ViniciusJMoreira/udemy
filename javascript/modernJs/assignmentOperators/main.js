'use-strict';

const user = {
  fullname: {
    name: 'Vinicius',
    surname: 'Junqueira',
    nickname: ''
  },
  age: 20,
  birthday: 1993,
  currentYear: undefined,
}

// (OR) Assignment operator
user.fullname.nickname ||= 'Anonymous';

// (??) Nullish assignment operator
user.currentYear ??= new Date().getFullYear();

// (And) Assignment operator
user.age &&= (user.currentYear - user.birthday);

console.log(user);