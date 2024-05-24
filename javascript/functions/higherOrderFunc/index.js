"use-strict";
const oneWord = function (str) {
  return str.replace(/ /g, "".toLowerCase());
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

transformer("Javascript is the best!", oneWord);
console.log("----------------------");
transformer("Javascript is the best!", upperFirstWord);
