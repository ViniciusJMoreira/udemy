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
// console.log(name, openingHours, categories);

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
// console.log(name);
({ name } = restaurant);
// console.log(name);

let [openFri = 0, closeFri = 0] = [];
({fri: {open: openFri, close: closeFri}} = openingHours);
// console.log(openFri, closeFri);

// Nested Objects
const {fri: {open, close}} = openingHours;
// console.log(open,close);

// Destructuring objects with functions arguments
restaurant.orderDelivery({
  nameClient: 'Vinicius',
  startIndex: 2,
  mainIndex: 1,
  address: 'Via Cella, 7'
})
function openingFriday ({openingHours: {fri: {open , close}}}) {
  console.log(`Friday is open from ${open} until ${close}`);
}
openingFriday(restaurant);

const { sat, ...weekends } = restaurant.openingHours;
// console.log(sat,weekends);
const [obj1, obj2] = [{a:[1,2,3,4]},{b:[5,6,7,8]}];
const obj3 = { ...obj1, ...obj2 };
const obj4 = { obj1, obj2 };
// console.log(obj3);
// console.log(obj4);

function restParameter({ sat, ...weekends }) {
  console.log(weekends.fri);
 
}

// restParameter(restaurant.openingHours);