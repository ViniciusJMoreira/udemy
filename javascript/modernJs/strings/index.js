const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane.length);

// console.log(airline.indexOf('P'));
// console.log(airline.lastIndexOf('A'));

// console.log(airline.slice(0,3));
// console.log(airline.slice(airline.lastIndexOf('P'), airline.length));

///////////////////////////////////
// 2 LEZION

const checkmiddleseat = function(seat) {
  const check = seat.slice(-1);
  const response = check === "E" || check === "D" ? 'You got the middle seat' : 'You got lucky';
  // console.log(response);
}
checkmiddleseat('40A');
checkmiddleseat('25E');
checkmiddleseat('10D');

const passenger = 'ViNiCius';
const lowercase = passenger.toLocaleLowerCase();
const normalizepass = lowercase[0].toUpperCase() + lowercase.slice(1);
// console.log(normalizepass);

const email = ' Vinicius@email.com';
const normalizeEmail = email.toLowerCase().trim();
// console.log(normalizeEmail);

const priceGB = '200,97£';
const priceUS = priceGB.replace('£', '$').replace(',','.');
// console.log(priceGB, priceUS);

const ammouncement = 'All passangers come to boarding door 23, Boarding door 23!';

// console.log(ammouncement.replace('door', 'gate'));
// console.log(ammouncement.replaceAll('door', 'gate'));
// console.log(ammouncement.replace(/door/g, 'gate'));

// console.log(plane.includes('A320'));
// console.log(plane.includes('B450'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of the NEW Airbus family');

const checkBaggage = function (items) {
  const bagagge = items.toLowerCase();
  // if (bagagge.includes('knife') || bagagge.includes('gun')) console.log('You are NOT allowed on board.');
  // else console.log('Welcome aboard.');
}

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////
// 3 LEZION

// console.log('Vinicius+Junqueira+Moreira'.split('+'));

const [firstName, lastName] = 'Vinicius Moreira'.split(' ');
// console.log(firstName,lastName);

const fullname = ['Mr,', firstName, lastName].join(' ');
// console.log(fullname);

const capitalizeName = function(name) {
  const fullname = name.split(' ');
  const correctName = [];
  for (const n of fullname) {
    correctName.push(n[0].toUpperCase() + n.slice(1));
    // console.log(n.replace(n[0],n[0].toUpperCase()));
  }
  // console.log(correctName.join(' '));
}
capitalizeName('vinicius junqueira moreira');
capitalizeName('denise junqueira moreira');

// console.log('Vinicius'.padStart(10, '*').padEnd(12,'*'));

const maskCreditCard = function (numberCard) {
  const convert = String(numberCard);
  const maskNumber = convert.slice(-4);
  // console.log(maskNumber.padStart(convert.length, '*'));
}

maskCreditCard(1234567891234567);
maskCreditCard(7894561239876543);

// console.log("it's 8 o'clock\n".repeat(5));

const planesInLine = function(n) {
  // console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
}

planesInLine(5);
planesInLine(15);
planesInLine(10);