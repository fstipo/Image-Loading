// '(use strict';

// Mouse events

const listEl = document.querySelectorAll('li');

for (let i = 0; i < listEl.length; i++) {
  listEl[i].addEventListener('mouseover', function () {
    this.classList.add('red');
  });
  listEl[i].addEventListener('mouseout', function () {
    this.classList.remove('red');
  });
}
