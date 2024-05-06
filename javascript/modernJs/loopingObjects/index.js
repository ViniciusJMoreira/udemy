import { Books } from "../index.js";

const week = ["Mon", "Tue", "Wed", "Thi", "Fri", "Sat", "Sun"];
const openingHours = {
  fri: {
    open: 12,
    close: 22,
  },
  sat: {
    open: 11,
    close: 23,
  },
  sun: {
    open: 18,
    close: 24,
  },
};

// object keys
const days = Object.keys(openingHours);
// console.log(days);
let message = `We are open ${days.length} days a week, on:`;
for (const day of days) {
  message += ` ${day},`
}
// console.log(message);

// object value
const opening = Object.values(openingHours);
// console.log(opening);
for (const {open, close} of opening) {
  // console.log(open , close);
}

// object entries
const weekOpening = Object.entries(openingHours);
// console.log(weekOpening);
for (const [day,{ open, close }] of weekOpening) {
  // console.log(`On ${day}, we open at ${open}, and close at ${close}`);
}

// object Pratice
const books = Books;

for (const book of books) {
  const { thirdParty: {goodreads}, ...ohterProperty } = book;

  const element = Object.entries(goodreads);
  const values = Object.entries(ohterProperty);
  let message = ``;
  
  for (const [i,property] of values) {
    message += `${i}: ${property}`;
  }
  for (const [el,value] of element) {
    message += ` ${el}: ${value} `;
  }
  // console.log( message );
}
