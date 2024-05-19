const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane.length);

console.log(airline.indexOf('P'));
console.log(airline.lastIndexOf('A'));

console.log(airline.slice(0,3));
console.log(airline.slice(airline.lastIndexOf('P'), airline.length));

const checkmiddleseat = function(seat) {
  const check = seat.slice(-1);
  const response = check === "E" || check === "D" ? 'You got the middle seat' : 'You got lucky';
  console.log(response);
}
checkmiddleseat('40A');
checkmiddleseat('25E');
checkmiddleseat('10D');
