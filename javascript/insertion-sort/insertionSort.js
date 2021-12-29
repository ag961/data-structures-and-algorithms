'use strict';

function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {

    let j = i - 1;
    let temp = arr[i]; // i = 1; j = 0; temp = 4

    while (j >= 0 && temp < arr[j]) { //arr[j === 0] = 8, so 4 (temp) is less than 8 (arr[j]), condition is met

      // arr[0 + 1] === 4  will get reassigned a value from arr[0], i.e. 8 

      arr[j + 1] = arr[j]; // arr[1] is now 8, used to be 4.
      j = j - 1; // j is now -1

      // since j < 0, break out of while loop
    }

    arr[j + 1] = temp; // arr[0] is now 4, used to be 8. essentially, after completion of first for loop, 8 and 4 are switching places

  }
}

let array1 = [8, 4, 23, 42, 16, 15];

insertionSort(array1);

console.log(array1);
