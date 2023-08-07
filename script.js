'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highestScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const guessStr = document.querySelector('.guess').value;

  if (guessStr === '') {
    document.querySelector('.message').textContent = '🛑 No number!';
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent = 'Correct range from 1-20';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉Correct number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Guess was too high!' : 'Guess was too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = document.querySelector(
    '.message'
  ).textContent = 'Start guessing...';

  document.querySelector('.highscore').textContent = highestScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
