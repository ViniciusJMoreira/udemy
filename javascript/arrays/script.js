'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2024-06-18T21:31:17.178Z",
    "2024-06-23T07:42:02.383Z",
    "2024-06-28T09:15:04.904Z",
    "2024-06-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-07-04T17:01:17.194Z",
    "2024-07-09T23:36:17.929Z",
    "2024-07-10T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2024-11-01T13:15:33.035Z",
    "2024-11-30T09:48:16.867Z",
    "2024-12-25T06:04:23.907Z",
    "2024-01-25T14:18:46.235Z",
    "2024-02-05T16:33:06.386Z",
    "2024-04-10T14:43:26.374Z",
    "2024-06-25T18:49:59.371Z",
    "2024-07-07T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  locale: "it-IT",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  locale: "pt-BR",
};

const accounts = [account1, account2, account3, account4];
const locale = navigator.locale;

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["en-US", "USD"], // United States
//   ["it-IT", "EUR"], // Italy
//   ["en-GB", "GBP"], // United Kingdom
//   ["pt-BR", "BRL"], // Brazil
//   ["de-DE", "EUR"], // Germany
// ]);

const currencies = {
  UnitedStates: {
    localeCode: "en-US",
    currency: "USD",
  },
  Italy: {
    localeCode: "it-IT",
    currency: "EUR",
  },
  UnitedKingdom: {
    localeCode: "en-GB",
    currency: "GBP",
  },
  Brazil: {
    localeCode: "pt-BR",
    currency: "BRL",
  },
  Germany: {
    localeCode: "en-GB",
    currency: "EUR",
  },
};

const country = "Brazil";
let currentAccount = accounts[0];
let sort = false;

updateUI(account1);

const date = new Date().toLocaleDateString("pt-BR", {dateStyle: "long"});
const time = new Date().toLocaleTimeString("pt-BR" , {timeStyle: "long"});
console.log(date, time);


/////////////////////////////////////////////////

// Converte os valores para a moeda atual do pais selecionado
function convertCurrency (movement) {
  return movement.toLocaleString(`${currencies[country].localeCode}`, {
    style: "currency",
    currency: `${currencies[country].currency}`
  });
}

// Mostra e atualiza o credito atual
function displayCurrentBalance(account) {
  account.balance = account.movements.reduce((acc,mov) => acc += mov,0);
  labelBalance.textContent = convertCurrency(account.balance);
}

// Calcula a quantidade de dias entre duas datas
function calcMovementDate(date) {
  const now = new Date().getTime();
  const oldDate = new Date(date).getTime();
  const daysPassed = Math.round(Math.abs(oldDate - now) / (1000 * 60 * 60 * 24));

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const year = `${new Date(date).getFullYear()}`;
    // const month = `${new Date(date).getMonth() + 1}`.padStart(2, 0);
    // const day = `${new Date(date).getDate()}`.padStart(2, 0);
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(new Date(date));
  }
}

// Mostra todos transaçoes na seçao movements
function displayMovements(account, sort = false) {
  const movements = sort === true ? account.movements.slice().sort((a,b) => a-b) : account.movements;
  containerMovements.innerHTML = '';
  movements.forEach((mov,i) => {
    const date = account.movementsDates[i];
    const type = mov < 0 ? 'withdrawal' : 'deposit';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i} ${type}</div>
          <div class="movements__date">${calcMovementDate(date)}</div>
          <div class="movements__value">${convertCurrency(mov)}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

// Calcula todos os depositos e pagamentos feitos + taxa de interesse
function calcDisplaySummary(account) {
  const incomes = account.movements.filter(mov => mov > 0)
  .reduce((acc,mov) => acc += mov,0);
  labelSumIn.textContent = convertCurrency(incomes);

  const outcomes = account.movements.filter(mov => mov < 0)
  .reduce((acc,mov) => acc += mov,0);
  labelSumOut.textContent = convertCurrency(Math.abs(outcomes));

  const interest = account.movements.filter(mov => mov > 0).
  map(dep => dep * account.interestRate/100).
  filter(int => int >= 1).
  reduce((acc,int) => acc += int,0);
  labelSumInterest.textContent = convertCurrency(interest);
}

// cria a propriedade username com as iniciais do nome
accounts.forEach(acc =>
  acc.username = acc.owner.toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('')
)

// Find Acoount
function findAccount(username) {
  const account = accounts.find((acc) => acc.username === username);
  return account || undefined;
}

function updateUI(account) {
  // Display Balance
  displayCurrentBalance(account);
  // Display movements
  displayMovements(account);
  // Display summary
  calcDisplaySummary(account);
}

// EVENTS

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    weekday: "long"
  }
  const now =  new Date();
  labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
  currentAccount = findAccount(inputLoginUsername.value);
  const pin = +inputLoginPin.value;
  if(currentAccount?.pin === pin) {
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = '';
    // inputLoginUsername.blur();
    // inputLoginPin.blur();
    // Display UI message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const receiveAcc = findAccount(inputTransferTo.value);
  const amount = +inputTransferAmount.value;
  inputTransferTo.value = inputTransferAmount.value = "";
  // inputTransferTo.blur();
  // inputTransferAmount.blur();
  if(
    receiveAcc &&
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiveAcc?.owner !== currentAccount.owner
  ) {
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    // create transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiveAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  inputLoanAmount.value = '';
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov > amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    // create loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = +inputClosePin.value;
  inputCloseUsername.value = inputClosePin.value = '';
  if(
    username === currentAccount.username &&
    pin === currentAccount.pin
  ) {
    const indexAcc = accounts.findIndex(acc => acc.username === username);
    const confirmation = confirm("Are you sure to delete the account ?");
    if(confirmation) {
      accounts.splice(indexAcc, 1);
      currentAccount = undefined;
      containerApp.style.opacity = 0;
    }
  }
});

btnSort.addEventListener('click', () => {
  sort = !sort;
  displayMovements(currentAccount, sort);
});



// METHOD FLAT
const flat = accounts.map(acc => acc.movements).flat().reduce((acc,mov) => acc += mov);
const flatMap = accounts.flatMap(acc => acc.movements).reduce((acc,mov) => acc += mov);
// console.log(flat, flatMap);

// PRATICE METHODS
const {deposit, withdrawl} = accounts.flatMap(mov => mov.movements)
.reduce((acc, mov) => {acc[mov > 0 ? "deposit" : "withdrawl"] +=mov; return acc}, {deposit:0,withdrawl:0});
// console.log(deposit,withdrawl);

const capitalizeWord = function(word) {
  const restrict = ["and", "a", "an", "the", "but", "or", "on", "in", "with"];
  const correctWord = word.toLowerCase()
  .split(" ")
  .map(word => restrict.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
  .join(" ");
  return correctWord;
}
// console.log(capitalizeWord("this is a NICE title"));
// console.log(capitalizeWord("and HERE is Another title with an EXAMPLE"));