'use strict';
let secretNumber = Math.trunc( Math.random() * 20 ) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    let message = '⛔️ Not a number!';
    displayMessage(message);
  } else if (guess === secretNumber) { // When player wins
    let message = '🎉 Correct Number!';
    displayMessage(message);
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if( score > highscore ) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      let message = '📈 Too high!';
      if (guess < secretNumber) message = '📉 Too low!';
      displayMessage(message);
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      const message = '💥 You lost the game!';
      displayMessage(message);
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent= score;
  document.querySelector('.guess').value = '';

  let message = 'Start guessing...';
  displayMessage(message);
});