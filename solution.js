"use strict";
console.clear();

const squareNumber = (num) => num ** 2;

function square(arr, cb) {
  let result = [];
  for (let num of arr) {
    result.push(cb(num));
  }
  return result;
}

const array = [1, 2, 3, 4, 5, 6];
console.log(square(array, squareNumber)); // return [1,4,9,16,25]
