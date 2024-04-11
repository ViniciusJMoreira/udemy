const age = 17;
const drink = age >= 18 ? 'Wine 🍷' : 'Water 💧';
console.log(`I like to drink ${drink}`);
console.log(`I like to drink ${age >= 18 ? 'Wine 🍷' : 'Water 💧'}`);

// calculator tips
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);