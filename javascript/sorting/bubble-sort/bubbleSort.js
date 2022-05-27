'use strict';

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++){
      console.log(j);
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1)
        console.log(arr);
      }
    }
  }
}

function swap(arr, lI, rI) {
  let temp = arr[lI];
  arr[lI] = arr[rI];
  arr[rI] = temp;
}

let myArr = [5, 4, 3, 2, 1]

bubbleSort(myArr);

console.log(myArr);

module.exports = bubbleSort;
