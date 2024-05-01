const user1 = {
  fullname: {
    name: 'Vinicius',
    surname: 'Moreira',
  },
  gener: 'Male',
}

const user2 = {
  fullname: {
    name: 'Andressa',
    surname: 'Texeira',
  },
  gener: 'Female',
  phone: '+3391234567',
}
// (Or) assignment operator (null, undefined, NaN, 0, '', false)
user1.phone ||= 'Indefinido';
user2.phone ||= "Indefinido";

// (And) assignment operator (null, undefined, NaN, 0, '', false)
user1.phone &&= 'Indefinido';
user2.phone &&= "Indefinido";

// nullish assignment operator (null, undefined)
user1.phone ??= 'Indefinido';
user2.phone ??= "Indefinido";

console.log(user1, user2);