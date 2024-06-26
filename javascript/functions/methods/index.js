'use-strict';
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    // console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const book = lufthansa.book;

const eurowings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
};
const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

// Call method
book.call(eurowings, 23, "Sara Willians");
book.call(lufthansa, 239, "Mary Cooper");
book.call(swiss, 583, "Mary Cooper");
// console.log(eurowings, lufthansa, swiss);

// Apply method
const flightData = [127, "John Smith"];
book.apply(swiss, [339, "George Cooper"]);
book.apply(swiss, flightData);
book.call(eurowings, ...flightData);


// Bind method
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
const bookEW = book.bind(eurowings);
bookLH(...flightData);
bookLX(...flightData);
bookEW(...flightData);

const bookLH431 = bookLH.bind(null,431);
bookLH431('John Coooper');

console.log(lufthansa,eurowings,swiss);

// With event listiner
lufthansa.planes = 300;
lufthansa.addPlanes = function() {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}

// document.addEventListener('DOMContentLoaded', lufthansa.addPlanes.bind(lufthansa));


// Partial application
const addTax = (rate,value) => value + value * rate;
const addTaxVat = addTax.bind(null, 0.23);
// console.log(addTaxVat(100));
// console.log(addTaxVat(23));


// const addTax = (rate, value) => rate + rate * value;
// const addVat = (rate) => addTax(rate, 0.23);
// console.log(addVat(100));
// console.log(addVat(23));

// const addTax = function (rate) {
  //   return function (value) {
    //     return value + value * rate;
    //   };
    // };
    
    // const taxVat = addTax(0.23);
    // console.log(taxVat(100));
    // console.log(taxVat(23));