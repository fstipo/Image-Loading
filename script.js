// '(use strict';

// Event listeners
const elementList = document.querySelectorAll('.list-item');

for (let z = 0; z < elementList.length; z++) {
  console.log(elementList[z]);
  // elementList[z].style.backgroundColor = 'yellow';
  elementList[z].style.padding = '14px';
  elementList[z].addEventListener('click', addRed);

  // elementList[z].addEventListener('click', addRed);
}

function addRed() {
  let temp = this.classList.toggle('red');
  console.log(this);
  console.log(temp);
}
