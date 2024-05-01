"use-strict";

class Book {
  constructor(athor, bookName, ...books) {
    (this.athor = athor), (this.bookName = bookName), (this.books = books);
  }
}

const book = new Book("Ator", "Nome Livro", "Livro1", "Livro2", "Livro3");
// console.log(book)

const home = {
  property: "Vinicius",
  address: {
    city: "Rimini",
    street: "Via saffi",
    number: 7,
  },
  rooms: [
    { room: "Bath", quantity: 2 },
    { room: "Badroom", quantity: 3 },
    { room: "Living Room", quantity: 1 },
    { room: "kitchen", quantity: 1 },
  ],
};

const { city, ...street } = home.address;
// console.log(city, street);

function restParameter(...args) {
  const [room, ...rest] = args;
  console.log(room, { ...rest });
}

// restParameter(...home.rooms);