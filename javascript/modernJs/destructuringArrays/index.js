'use-strict';

const restaurant = {
  name: 'classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
}

const [,bruschetta] = restaurant.starterMenu;
let [,firstPlate, secondPlate] = restaurant.mainMenu;

// console.log(bruschetta);
// console.log(firstPlate,secondPlate);

// Switching Variables
[firstPlate, secondPlate] = [secondPlate, firstPlate];
// console.log(firstPlate, secondPlate);
//Default values
let [n1=0, n2=0, n3=0] = [/*1,2,3*/];
// console.log(n1,n2,n3);
[n1=0, n2=0, n3=0] = [1,2,3];
// console.log(n1,n2,n3);

// Riceive 2 return values from a function
const [starterOrder, secondOrder] = restaurant.order(0,1);
// console.log(starterOrder, secondOrder);

const arr = [1,2,[3,4]];
const [,,[,n4 = 0]] = arr;
// console.log(n4);

const ranking = [['Vinicius', 20], ['Leonardo', 50]];
const [[,viniciusScore],[,leonardoScore]] = ranking;
viniciusScore >= leonardoScore ? console.log('Vinicius Win'):console.log('Leonardo Win');