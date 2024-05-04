const week = [ "Mon", "Tue", "Wed", "Thi", "Fri" ];
const weekend = {
  0: "Sat",
  1: "Sun",
};

const openingHours = {
  [week[2]]: {
    open: 12,
    close: 22,
  },
  [week[4]]: {
    open: 11,
    close: 23,
  },
  [weekend[0]]: {
    open: 0,
    close: `${20+4}`,
  },
}

const restaurant = {
  name: "classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

