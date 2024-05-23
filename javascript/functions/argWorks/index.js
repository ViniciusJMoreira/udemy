const flight = 'H320';
const passenger = {
  firstname : 'Vinicius',
  passport : '352153957'
}

const CheckIn = function(flightNum, passenger) {
  flightNum = 'F410';
  if(passenger.passport === '352153957') {
    console.log('CheckIn');
  }else {
    console.log('Wrong passport');
  }
}

CheckIn(flight, passenger);
console.log(passenger);

const changePassport = function(passenger) {
  passenger.passport = String(Math.trunc(Math.random()*999999999));
}

changePassport(passenger)
console.log(passenger);
CheckIn(flight, passenger);