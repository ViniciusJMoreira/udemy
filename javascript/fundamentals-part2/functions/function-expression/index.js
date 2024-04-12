// function declaration
function calcAge1(birthYear) {
  const year = new Date().getFullYear();
  return year - birthYear;
}
const age1 = calcAge1(1993);

// function expression
const calcAge2 = function(birthYear) {
  const year = new Date().getFullYear();
  return year - birthYear;
}
const age2 = calcAge2(1993);

console.log(age1, age2);