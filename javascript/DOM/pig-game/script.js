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
let currentCountPlayer1 = 0;
let currentCountPlayer2 = 0;
let countScorePlayer1 = 0;
let countScorePlayer2 = 0;

const displayMessage = function(element, message) {
  element.textContent = message;
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
    sectionPlayer1.classList.add('player--active');
    sectionPlayer2.classList.remove('player--active');
  }
}

const rollDice = function () {
  const playerActive = document.querySelector('.player--active');
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${randomNumber}.png`;
  if (dice.classList.contains('hidden')) dice.classList.remove('hidden');
  if (playerActive.classList.contains('player--0')){
    if(randomNumber === 1){
      currentCountPlayer1 = 0;
      displayMessage(currentPlayer1, currentCountPlayer1);
      sectionPlayer1.classList.remove('player--active');
      sectionPlayer2.classList.add('player--active');
    } else {
      currentCountPlayer1 += randomNumber;
      displayMessage(currentPlayer1, currentCountPlayer1);
    }
  } else if(playerActive.classList.contains('player--1')) {
    if (randomNumber === 1) {
      currentCountPlayer2 = 0;
      displayMessage(currentPlayer2, currentCountPlayer2);
      sectionPlayer2.classList.remove('player--active');
      sectionPlayer1.classList.add('player--active');
    } else {
      currentCountPlayer2 += randomNumber;
      displayMessage(currentPlayer2, currentCountPlayer2);
    }
  };
}

const hold = function () {
  const playerActive = document.querySelector('.player--active');
  countScorePlayer1 += currentCountPlayer1;
  countScorePlayer2 += currentCountPlayer2;
  if (playerActive.classList.contains('player--0')) {
    currentCountPlayer1 = 0;
    displayMessage(scorePlayer1, countScorePlayer1);
    displayMessage(currentPlayer1, currentCountPlayer1);
    sectionPlayer2.classList.add('player--active');
    sectionPlayer1.classList.remove('player--active');
  }
  else {
    currentCountPlayer2 = 0;
    displayMessage(scorePlayer2, countScorePlayer2);
    displayMessage(currentPlayer2, currentCountPlayer2);
    sectionPlayer1.classList.add('player--active');
    sectionPlayer2.classList.remove('player--active');
  }
}

btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);