'use strict';
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
let randomNumber = Math.floor(Math.random() * 19) + 1;
let countHighscore = 0;
let countScore = 20;

const check = function (e) {
  e.preventDefault();
  const inputNumber = Number(document.querySelector('.guess').value);
  if(inputNumber === randomNumber) {
    document.body.style.backgroundColor = '#60b347';
    number.textContent = inputNumber;
    message.textContent = '🎉 Correct number!';
    if (countHighscore < inputNumber) {
      countHighscore = inputNumber;
      highscore.textContent = countHighscore;
    }
  }else if (inputNumber > (randomNumber + 3) || inputNumber < (randomNumber - 3)) {
    message.textContent = '👎 Too low!';
    countScore--;
    score.textContent = countScore;
  } else {
    message.textContent = '👍 Too high!';
    countScore--;
    score.textContent = countScore;
  }
}

const reset = function (e) {
  e.preventDefault();
  randomNumber = Math.floor(Math.random() * 19) + 1;
  document.body.style.backgroundColor = '#222';
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  countScore = 20;
  score.textContent = countScore;
  document.querySelector('.guess').value = ''
  document.querySelector('.guess').focus();
}

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', reset)