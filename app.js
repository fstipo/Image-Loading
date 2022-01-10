'use strict';

// const backgroundEl = document.querySelector('.bg-img');
// const counterEl = document.querySelector('.countUp');

// let countStart = 0;
// const countEnd = '100%';
// let blurImg = 70;

// const counter = setInterval(() => {
//   counterEl.innerHTML = `${(countStart += 1)}%`;
//   let countNow = counterEl.innerHTML;
//   blurImg -= Number(0.6955);
//   backgroundEl.style.filter = `blur(${blurImg.toFixed(0)}px)`;

//   if (countNow === countEnd) {
//     clearInterval(counter);
//   }
// }, 100);

// counter;

const loadText = document.querySelector('.load-text');
const bg = document.querySelector('.bg');
let load = 0;

const blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerHTML = load + '%';
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

const int = setInterval(blurring, 30);

// map 2 rangeas of numbers (load: 0-100,opacity: 1-0)
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
