'use strict';

const backgroundEl = document.querySelector('.bg-img');
const counterEl = document.querySelector('.countUp');

let countStart = 0;
const countEnd = '100%';
let blurImg = 70;

const counter = setInterval(() => {
  counterEl.innerHTML = `${(countStart += 1)}%`;
  let countNow = counterEl.innerHTML;
  blurImg -= Number(0.6955);
  backgroundEl.style.filter = `blur(${blurImg.toFixed(0)}px)`;

  if (countNow === countEnd) {
    clearInterval(counter);
  }
}, 100);

counter;
