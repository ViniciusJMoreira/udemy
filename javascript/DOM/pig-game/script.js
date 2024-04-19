'use strict';
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const sectionPlayer1 = document.querySelector('.player--0');
const sectionPlayer2 = document.querySelector('.player--1');
const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
const currentPlayer1 = document.getElementById('current--0');
const currentPlayer2 = document.getElementById('current--1');
let countScorePlayer1 = 0;
let countScorePlayer2 = 0;
let currentCountPlayer1 = 0;
let currentCountPlayer2 = 0;

const displayMessage = function(element, message) {
  element.textContent = message;
}

const tooglePlayerActiveClass = function (addElement,removeElement) {
  addElement.classList.add('player--active');
  removeElement.classList.remove('player--active');
}

const newGame = function () {
  currentCountPlayer1 = 0;
  currentCountPlayer2 = 0;
  countScorePlayer1 = 0;
  countScorePlayer2 = 0;
  displayMessage(scorePlayer1, countScorePlayer1);
  displayMessage(scorePlayer2, countScorePlayer2);
  displayMessage(currentPlayer1, currentCountPlayer1);
  displayMessage(currentPlayer2, currentCountPlayer2);
  if(!dice.classList.contains('hidden')) dice.classList.add('hidden');
  if(!sectionPlayer1.classList.contains('.player--active')) {
    tooglePlayerActiveClass(sectionPlayer1, sectionPlayer2);
  }
  if (sectionPlayer1.classList.contains('player--winner') || (sectionPlayer2.classList.contains('player--winner'))) {
    sectionPlayer1.classList.remove('player--winner');
    sectionPlayer2.classList.remove('player--winner');
    btnRollDice.disabled = false;
    btnHold.disabled = false;
  }
}
// Rolling dice functionality
const rollDice = function () {
  // Generating a random dice roll
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // display a dice
  dice.src = `dice-${randomNumber}.png`;
  if (dice.classList.contains('hidden')) dice.classList.remove('hidden');
  // check for rolled 1: if true 
  if (sectionPlayer1.classList.contains('player--active')) {
    if (randomNumber === 1) {
      currentCountPlayer1 = 0;
      displayMessage(currentPlayer1, currentCountPlayer1);
      tooglePlayerActiveClass(sectionPlayer2, sectionPlayer1);
    } else {
      currentCountPlayer1 += randomNumber;
      displayMessage(currentPlayer1, currentCountPlayer1);
    }
  } else {
    if (randomNumber === 1) {
      currentCountPlayer2 = 0;
      displayMessage(currentPlayer2, currentCountPlayer2);
      tooglePlayerActiveClass(sectionPlayer1, sectionPlayer2);
    } else {
      currentCountPlayer2 += randomNumber;
      displayMessage(currentPlayer2, currentCountPlayer2);
    }
  };
}

const hold = function () {
  countScorePlayer1 += currentCountPlayer1;
  countScorePlayer2 += currentCountPlayer2;
  if (countScorePlayer1 >= 100 || countScorePlayer2 >= 100) {
    dice.classList.add('hidden');
    btnRollDice.disabled = true;
    btnHold.disabled = true;
  }
  if (sectionPlayer1.classList.contains('player--active')) {
    if (countScorePlayer1 >= 100) sectionPlayer1.classList.add('player--winner');
    currentCountPlayer1 = 0;
    displayMessage(scorePlayer1, countScorePlayer1);
    displayMessage(currentPlayer1, currentCountPlayer1);
    tooglePlayerActiveClass(sectionPlayer2, sectionPlayer1);
  } else {
    if (countScorePlayer2 >= 100) sectionPlayer2.classList.add('player--winner');
    currentCountPlayer2 = 0;
    displayMessage(scorePlayer2, countScorePlayer2);
    displayMessage(currentPlayer2, currentCountPlayer2);
    tooglePlayerActiveClass(sectionPlayer1, sectionPlayer2);
  }
}

btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);