// 'use strict';

// Event listeners
const beRed = document.querySelectorAll('.list-item');
console.log(beRed);

beRed.forEach((el) => {
  console.log(el);
  el.addEventListener('click', () => {
    el.classList.toggle('red');
    el.style.padding = '10px';
  });
});
