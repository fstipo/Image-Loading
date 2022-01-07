'use strict';

const backgroundEl = document.querySelector('.bg-img');
let countUp = document.querySelector('.countUp');

let countStart = 0;
let countEnd = 100;

const counter = setInterval(() => {
  countUp.innerHTML = countStart += 1;
  let countNow = Number(countUp.innerHTML);

  if (countNow === countEnd) {
    clearInterval(counter);
  }
}, 30);

counter;
