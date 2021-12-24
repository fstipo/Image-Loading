// '(use strict';

// Event listeners
const elementList = document.querySelectorAll('.list-item');

elementList.forEach((el) => {
  el.style.padding = '2px';
  el.style['background-color'] = 'yellow';
  el.addEventListener('click', bigFont);
});

function bigFont() {
  const temp = this.classList.toggle('red');
  console.log(this);
  console.log(temp);
}
