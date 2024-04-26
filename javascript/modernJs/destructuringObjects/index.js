const restaurant = {
  name: "classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    wed: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({nameClient = 'Client', startIndex, mainIndex, address}) {
    console.log(`
    Order riceived of Sr ${nameClient}!
    First Plate: ${this.starterMenu[startIndex]},
    Second Plate: ${this.mainMenu[mainIndex]}
    will be delivered to ${address}.
    `);
  }
};
// destructuring object
let { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// setting variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(firstName, hours, tags);

//Default values
const {
  location: restaurantLocation = "Via , Citta, Paese",
  mainMenu: menu = [],
} = restaurant;
// console.log(restaurantLocation, menu);

// Muting Variables
restaurant.name = "Italian Classic";
console.log(name);
({ name } = restaurant);
console.log(name);

const numbers = {
  n1: 1,
  n2: 2,
};
let [n1 = 0, n2 = 0] = [1000, 1000];
({fri: {open: n1, close: n2}} = openingHours);
console.log(n1, n2);

// Nested Objects
const {fri: {open, close}} = openingHours;
console.log(open,close);

// Destructuring objects with functions arguments
restaurant.orderDelivery({
  nameClient: 'Vinicius',
  startIndex: 2,
  mainIndex: 1,
  address: 'Via Cella, 7'
})