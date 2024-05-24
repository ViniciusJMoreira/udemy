"use-strict";
const bookings = [];

const createBookings = (
  passengerName,
  passengerNum = 1,
  price = 299 * passengerNum
) => {
  // passengerNum ??= 1;
  // price ??= 299 * passengerNum;
  const booking = {
    passengerName,
    passengerNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings("A123");
createBookings("A123", 5);
createBookings("A123", undefined, 880);
console.log(bookings);
