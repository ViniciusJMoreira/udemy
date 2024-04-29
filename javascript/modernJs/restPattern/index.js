class Book {
  constructor(athor, bookName, ...books) {
    this.athor = athor,
    this.bookName = bookName,
    this.books = books
  }
}

const book = new Book("Ator", "Nome Livro", "Livro1", "Livro2", "Livro3");
// console.log(book)

const house = {
  property: 'Vinicius',
  address: {
    city: 'Rimini',
    street: 'Via saffi',
    number: 7,
  },
  rooms: [
    {room: 'Bath', quantity: 2},
    {room: 'Badroom', quantity: 3},
    {room: 'Living Room', quantity: 1},
    {room: 'kitchen', quantity: 1},
  ]
}

const {rooms : [{room,quantity}]} = house;
// console.log(room, quantity);

const { city, ...street } = house.address;
console.log(city,street);