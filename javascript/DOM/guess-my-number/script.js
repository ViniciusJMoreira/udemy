'use strict';
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
let randomNumber = Math.floor(Math.random() * 19) + 1;
let countHighscore = 0;
let countScore = 20;

const check = function (e) {
  e.preventDefault();
  const inputNumber = Number(document.querySelector('.guess').value);
  // when there is not input number or input number is a negative number
  if(!inputNumber || inputNumber < 0) message.textContent = '🛑 not a number!';
  // when player wins
  else if(inputNumber === randomNumber) {
    document.body.style.backgroundColor = '#60b347';
    number.textContent = inputNumber;
    message.textContent = '🎉 Correct number!';
    btnCheck.disabled = true;
    btnCheck.style.backgroundColor = '#ccc';
    if (countHighscore < countScore) {
      countHighscore = countScore;
      highscore.textContent = countHighscore;
    }
  // when guess is too high
  }else if (inputNumber !== randomNumber) {
    message.textContent =
      inputNumber > randomNumber ? '📉 Too high!' : '📈 Too low!';
    countScore--;
    score.textContent = countScore;
  // when guess is too low
  }
  // 
  if(countScore === 0) {
    message.textContent = '😥 Lose!';
    countHighscore = 0;
    highscore.textContent = countHighscore;
    btnCheck.disabled = true;
    btnCheck.style.backgroundColor = '#ccc';
  }
}
const reset = function (e) {
  e.preventDefault();
  btnCheck.disabled = false;
  btnCheck.style.cssText = `background-color:#eee;`;
  randomNumber = Math.floor(Math.random() * 19) + 1;
  document.body.style.cssText = `background-color:#222;`;
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  countScore = 20;
  score.textContent = countScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
}

btnCheck.addEventListener('click', check);
document.querySelector('.again').addEventListener('click', reset);