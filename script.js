'use strict';

// console.log(document.querySelector('.message').textContent); //selecting css class with '.message', for id use #

// //set the content of the element to something else
// document.querySelector('.message').textContent = '🎉 Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); //with the input field we use the value to get the actual value of the property

// select button element and use addeventlistener method on that element to attach an eventhandler and this eventhandler is the function below
document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value); //log the value from the input field to the console
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess); //getting back a string usually always from the input field if we are not using the Number function
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
