// '(use strict';

// add remove list item

const mainListEl = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
const inputEl = document.querySelector('input');

listItems.forEach((el) => {
  el.addEventListener('click', () => {
    let red = el.classList.toggle('red');
    if (red) {
      let span = document.createElement('span');
      span.textContent = ' X ';
      el.appendChild(span);
      span.addEventListener('click', () => {
        el.parentNode.removeChild(el);
      });
    }
  });
});
