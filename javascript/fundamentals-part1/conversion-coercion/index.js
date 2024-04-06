// Type convertion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear + 18));

console.log(Number('Jonas')); // NaN

console.log(typeof NaN);

// quindi in realta un NaN significa che non riesce a produrre un numero valido. Per ogni operazione che coinvolge i numeri e , non riesce a produrre un nuovo numero .

console.log(String(15), 15);

// Type Coercion
console.log('I,m' + 31 + 'years old'); // I'm 31 years old
console.log('23' - '10' - 3); // 3
console.log('23' + '3' + 3); // '2333'
console.log('23' / 2); // 11.5

let n = '10' + 1;
n = n - 1;
console.log(n);  // 100

console.log(5 + 5 + 5 + '5'); // '155'

console.log('20'-'10'-'5' + '5'); // '55'