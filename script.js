// '(use strict';

// Event object

const btn = document.querySelector('button');
const spanList = document.querySelectorAll('span');

const randomNumber = (num) => Math.floor(Math.random() * (num + 1));

const changeColor = (e) => {
  const temp = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(
    255
  )})`;
  document.body.style.backgroundColor = temp;
};

btn.addEventListener('click', changeColor);

spanList.forEach((el) => {
  el.addEventListener('click', (item) => {
    const temp = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(
      255
    )})`;
    el.style.backgroundColor = temp;
  });
});
