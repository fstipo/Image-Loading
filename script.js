// 'use strict';

// create DOM elements
const divEl = document.createElement('div');
divEl.id = 'myID';
divEl.style.backgroundColor = 'orange';
divEl.style['font-size'] = '42px';
divEl.textContent = 'Hey I am new div';
document.body.appendChild(divEl);
const h1 = document.querySelector('h1');
document.body.insertBefore(divEl, h1);
const newText = document.createTextNode(' -Help!');
divEl.appendChild(newText);

document.body.insertAdjacentHTML('afterbegin', divEl);

console.log(divEl);
