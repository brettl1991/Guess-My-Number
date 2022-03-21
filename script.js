'use strict';

// console.log(document.querySelector('.message').textContent); //selecting css class with '.message', for id use #

// //set the content of the element to something else
// document.querySelector('.message').textContent = '🎉 Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); //with the input field we use the value to get the actual value of the property

//define the secret number between 1 and 20 (cutting decimals with trunc and +1 allow to get back 20 as well)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//showing the secret number on the webpage, this is mainly for us
// document.querySelector('.number').textContent = secretNumber;
//upon wron guess the score will decrese
let score = 20; //state variable, contain data which relevant to this appliation
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// select button element and use addeventlistener method on that element to attach an eventhandler and this eventhandler is the function below
document.querySelector('.check').addEventListener(
  'click',
  function () {
    // console.log(document.querySelector('.guess').value); //log the value from the input field to the console
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess); //getting back a string usually always from the input field if we are not using the Number function
    //when there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔ No number!';
      displayMessage('⛔ No number!');
    }
    //comparing our guess to the secret number
    //When the player win
    else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎉 Correct number!';
      displayMessage('🎉 Correct number!');
      //actually we want that just happen when the player guesses the correct number
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //when guess is wrong
    else if (guess !== secretNumber) {
      // if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--; //score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🧨 You lost the game';
      displayMessage('🧨 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //when gues is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--; //score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🧨 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--; //score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🧨 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
);

//Coding challange
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //generates a new random number to not be the same as before
  // document.querySelector('.message').textContent = 'Start guessing ...';
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
