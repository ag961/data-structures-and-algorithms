'use strict';

function mergeSort(arr) {
  let n = arr.length;

  if (arr.length === 1) return arr;


  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  // sort the left side
  left = mergeSort(left);
  // sort the right side
  right = mergeSort(right);
  // merge the sorted left and right sides together
  return merge(left, right);
}

function merge(left, right) {
  let mergedArray = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      mergedArray[mergedArray.length] = left[i];
      i = i + 1;
    }
    else {
      mergedArray[mergedArray.length] = right[j];
      j = j + 1;
    }
  }

  while (j < right.length) {
    mergedArray[mergedArray.length] = right[j];
    j = j + 1;
  }

  while (i < left.length) {
    mergedArray[mergedArray.length] = left[i];
    i = i + 1;
  }

  return mergedArray;
}

let myArr = [7, 3, 9, 4, 8, 2, 6, 5, 1];

console.log(mergeSort(myArr))

console.log(myArr);

module.exports = mergeSort;
