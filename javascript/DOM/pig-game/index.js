'use strict';
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const sectionPlayer0 = document.querySelector('.player--0');
const sectionPlayer1 = document.querySelector('.player--1');
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const currentPlayer0 = document.getElementById('current--0');
const currentPlayer1 = document.getElementById('current--1');
const scores = [0,0];
let currentScore = 0;
let currentPlayer = 0;

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent =
    currentScore;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  sectionPlayer0.classList.toggle('player--active');
  sectionPlayer1.classList.toggle('player--active');
}

const newGame = function () {
  if (
    document.querySelector(`.player--${currentPlayer}`).classList.contains('player--winner')
  ) {
    document.querySelector(`.player--${currentPlayer}`).classList.remove('player--winner');
    btnRollDice.disabled = false;
    btnHold.disabled = false;
  }
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  currentPlayer = 0;
  scorePlayer0.textContent = scores[0];
  scorePlayer1.textContent = scores[1];
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;
  if (!dice.classList.contains('hidden')) dice.classList.add('hidden');
  if (!sectionPlayer0.classList.contains('player--active')) {
    sectionPlayer0.classList.add('player--active');
    sectionPlayer1.classList.remove('player--active');
  }
}
newGame();

// Rolling dice functionality
const rollDice = function () {
  // Generating a random dice roll
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // display a dice
  if(dice.classList.contains('hidden'))dice.classList.remove('hidden');
  dice.src = `dice-${randomNumber}.png`;
  // check for rolled
  if (randomNumber !== 1) {
    // add dice to current score
    currentScore += randomNumber;
    document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;
  } else {
    // switch to next player
    switchPlayer();
  }
}

const hold = function () {
  // add current score to current player's score
  scores[currentPlayer] += currentScore;
  document.querySelector(`#score--${currentPlayer}`).textContent =
    scores[currentPlayer];

  // Check if player's score is >= 100
  if (scores[currentPlayer] >= 100) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');
      btnRollDice.disabled = true;
      btnHold.disabled = true;
    // switch to the next player
  }else switchPlayer();
}
btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
