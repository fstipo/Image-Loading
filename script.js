// 'use strict';

// children vs. childNodes

const spanEl = document.querySelector('div.pickMe');
console.log(spanEl);
console.dir(spanEl.children.length);
console.dir(spanEl.childNodes.length);

console.log(spanEl.nextElementSibling);
console.log(spanEl.nextSibling);

console.log(spanEl.parentElement);
console.log(spanEl.parentNode);

console.log(spanEl.previousElementSibling);
console.log(spanEl.previousSibling);

// style
const h1 = document.querySelector('h1');
console.log(h1);
h1.style.backgroundColor = 'yellow';
h1.style['text-align'] = 'center';
h1.style.display = 'none';
h1.style.display = 'block';
