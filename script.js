// '(use strict';

// Add a list item

const mainList = document.querySelector('ul');
const listEl = document.querySelectorAll('li');
const inputEl = document.querySelector('input');

const addItem = (e) => {
  if (e.key === 'Enter' && inputEl.value.length > 0) {
    let elList = [];
    let liEl = document.createElement('li');
    liEl.textContent = inputEl.value;
    mainList.appendChild(liEl);
    inputEl.value = '';
    elList = [...listEl, liEl];
    console.log(elList);
  }
};

inputEl.addEventListener('keypress', addItem);

listEl.forEach((el) => {
  el.addEventListener('click', () => {
    let red = el.classList.toggle('red');
    if (red) {
      let span = document.createElement('span');
      span.textContent = ' X ';
      el.appendChild(span);
      span.addEventListener('click', () => {
        el.parentNode.removeChild(el);
      });
    } else {
      el.getElementsByTagName('span')[0].remove();
    }
  });
});
