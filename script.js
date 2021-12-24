// '(use strict';

// Event listeners Challenge 2 - add items
const listItemEl = document.querySelector('ul');
console.log(listItemEl);

const inputEl = document.querySelector('input');
console.log(inputEl);

const btn = document.querySelector('button');
console.log(btn);

const addListItem = () => {
  console.log(inputEl.value);
  const listEl = document.createElement('li');
  listEl.textContent = inputEl.value;
  console.log(listEl);
  listItemEl.appendChild(listEl);
};

btn.addEventListener('click', addListItem);
