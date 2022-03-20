'use strict';

console.log(document.querySelector('.message').textContent); //selecting css class with 'message', for id use #

//set the content of the element to something else
document.querySelector('.message').textContent = '🎉 Correct number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); //with the input field we use the value to get the actual value of the property
