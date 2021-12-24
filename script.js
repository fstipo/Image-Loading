// '(use strict';

// Event listeners Challenge 3 - change background color

const btn = document.querySelector('button');
console.log(btn);

const randomNumber = (num) => Math.floor(Math.random() * (num + 1));
const randomColor = () => {};

const changeColor = () => {
  const temp = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(
    255
  )})`;
  document.body.style.backgroundColor = temp;
};

btn.addEventListener('click', changeColor);
