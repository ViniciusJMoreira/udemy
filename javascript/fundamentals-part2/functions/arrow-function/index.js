'use-strict';

const calcAge = birthYear => new Date().getFullYear() - birthYear;
const age = calcAge(1993);
console.log(age);

const yearsUntilRetirement = (firstName, currentYear, birthYear) => {
  const age = currentYear - birthYear;
  const retirement = 65 - age;
  return `${firstName} retire in ${retirement} years`;
}

console.log(yearsUntilRetirement('Vinicius',2024, 1993));