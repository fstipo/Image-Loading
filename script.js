// '(use strict';

// Event listeners Challenge 1 - pop Up window

const imgList = document.querySelectorAll('img');
console.log(imgList);

// for (let i = 0; i < imgList.length; i++) {
//   console.log(imgList[i]);
//   const el = imgList[i];
//   el.addEventListener('click', resizeImg);
// }

function resizeImg() {
  console.log(this);
  console.log(this.src);
  window.open(this.src, 'myImg', 'resizable=yes, width=500', 'heigh=500');
}

// other version - onClick

for (let i = 0; i < imgList.length; i++) {
  console.log(imgList[i]);
  const el = imgList[i];
  el.onclick = resizeImg;
}
