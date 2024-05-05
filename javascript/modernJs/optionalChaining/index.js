const week = ["Mon", "Tue", "Wed", "Thi", "Fri", "Sat", "Sun"];
const openingHours = {
  [week[2]]: {
    open: 12,
    close: 22,
  },
  [week[4]]: {
    open: 11,
    close: 23,
  },
  [week[0]]: {
    open: 18,
    close: 24,
  },
};

const restaurant = {
  name: "classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// objects
for (const day of week) {
  const open = restaurant.openingHours[day]?.open;
  const message = open && `On ${day}, we open at ${open}0`;
  // console.log(message ?? `On ${day} we are close`);
}

// Methods
const orderMenu = restaurant.order?.(2,1) ?? 'Method does not exist';
// console.log(orderMenu);

const orderOther = restaurant.orderOther?.(1, 2) ?? "Method does not exist";
// console.log(orderOther);

// Arrays
const users = [{fullname: 'Vinicius Moreira', email: 'vi@email.com'}];
// const users = [];
// console.log(users[0]?.fullname ?? 'User array empty');
