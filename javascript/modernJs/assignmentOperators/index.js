const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);;
const day = ("0" + date.getDate()).slice(-2);
const user1 = {
  fullname: {
    name: "Vinicius",
    surname: "Moreira",
    nickname: "Vini"
  },
  gender: "Male",
  updateDate: "20/04/2024",
};

const user2 = {
  fullname: {
    name: "Andressa",
    surname: "Texeira",
    nickname: ""
  },
  gender: "Female",
  phone: "+3391234567",
};
// (Or) assignment operator (null, undefined, NaN, 0, '', false)
user1.fullname.nickname ||= "Anonymous";
user2.fullname.nickname ||= "Anonymous";

// (And) assignment operator (null, undefined, NaN, 0, '', false)
user1.updateDate &&= `${day}/${month}/${year}`;
user2.updateDate &&= `${day}/${month}/${year}`;

// nullish assignment operator (null, undefined)
user1.phone ??= "Undefined";
user2.phone ??= "Undefined";

console.log( user1 , user2 );