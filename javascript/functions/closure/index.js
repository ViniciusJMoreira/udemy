const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

//////////////////////////

let internal;
(function() {
  const n = 10;
  internal = function() {
    console.log(n*2);
  }
})();
internal();

console.dir(internal);