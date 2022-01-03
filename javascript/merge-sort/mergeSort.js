'use strict';

function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    // sort the left side
    mergeSort(left);
    // sort the right side
    mergeSort(right);
    // merge the sorted left and right sides together
    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    }
    else {
      arr[k] = right[j];
      j = j + 1;
    }

    k = k + 1;
  }

  if (i === left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      k = k + 1;
      j = j + 1;
    }
  }
  else {
    while (i < left.length) {
      arr[k] = left[i];
      k = k + 1;
      i = i + 1;
    }
  }
}

module.exports = mergeSort;
