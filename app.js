'use strict';

const arr = ['a', 'b', 'c', 'd', 'e'];
const arr1 = [1, 2, 3, 45, 55];
arr;
arr.push('tom');
arr.unshift('Betty');
arr.pop();
arr.shift();
arr.indexOf('e');
arr.length;
arr.includes('5');
arr.includes('d');
// arr.slice(-4);
// arr.splice(1, 3);
arr.reverse();
arr.concat(arr1).reverse();
[...arr, ...arr1];

console.log(arr);
let arrSum = arr.join('');
arrSum = arr.join('-');
arrSum = arr.join('8');
arrSum = arr.join('/*');

console.log(arrSum);
