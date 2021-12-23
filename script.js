// '(use strict';

// Event listeners
const elList = document.querySelectorAll('.list-item');
console.log(elList);

elList.forEach((el) => {
  console.log(el);
  el.style.padding = '12px';
  el.addEventListener('click', changeTxtColor);
});

function changeTxtColor() {
  console.log(this);
  let temp = this.classList.toggle('red');
  console.log(temp);
}
