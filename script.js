// '(use strict';

// Key press events

document.addEventListener('keyup', onKeyUp);

function onKeyUp(e) {
  let temp = `key: ${e.key}, keyCode: ${e.keyCode}`;
  const divEl = document.createElement('div');
  divEl.textContent = temp;
  document.body.appendChild(divEl);
}
