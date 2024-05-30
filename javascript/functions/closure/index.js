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

////////////////////////

const boardPassengers = function(n = 1, wait) {
  const perGroup = n/3;
  const time = setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start borading in ${wait} seconds.`);
}

boardPassengers(99,10);