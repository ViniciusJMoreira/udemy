const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  }
}

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

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
book.call(eurowings ,23, 'Sara Willians');
book.call(lufthansa ,239, 'Mary Cooper');
book.call(swiss ,583, 'Mary Cooper');
console.log(eurowings, lufthansa, swiss);

// Apply method
const flightData = [127, 'John Smith'];
book.apply(swiss, [339,'George Cooper']);
book.apply(swiss, flightData);
book.call(eurowings, ...flightData);
