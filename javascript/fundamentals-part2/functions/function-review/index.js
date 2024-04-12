const calcAge = birthYear => new Date().getFullYear() - birthYear;

const yearsUntilRetirement = (firstName, birthYear) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return retirement > 0 ? `${firstName} retire in ${retirement} years` : `${firstName} has already retired 🎉`;
}

console.log(yearsUntilRetirement('Vinicius', 1993));
console.log(yearsUntilRetirement('Jonas', 19));
// function declaration
// function that can be used before it's declared

// function express
// essentially a function value stored in a variable

// arrow function
// great for a quick one-line functions. Has no this keyword (more later..)

// Three different ways of writing functions, but they all work in a similar way, receive input data , transform data , and then output data.