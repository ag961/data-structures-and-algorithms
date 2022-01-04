'use strict';

// ALGORITHM QuickSort(arr, left, right)
// if left < right
//     // Partition the array by setting the position of the pivot value
//     DEFINE position < --Partition(arr, left, right)
// // Sort the left
// QuickSort(arr, left, position - 1)
// // Sort the right
// QuickSort(arr, position + 1, right)

// ALGORITHM Partition(arr, left, right)
// // set a pivot value as a point of reference
// DEFINE pivot < --arr[right]
// // create a variable to track the largest index of numbers lower than the defined pivot
// DEFINE low < --left - 1
// for i < - left to right do
//   if arr[i] <= pivot
//         low++
//         Swap(arr, i, low)

//  // place the value of the pivot location in the middle.
//  // all numbers smaller than the pivot are on the left, larger on the right.
//  Swap(arr, right, low + 1)
// // return the pivot index point
// return low + 1

// ALGORITHM Swap(arr, i, low)
// DEFINE temp;
// temp < --arr[i]
// arr[i] < --arr[low]
// arr[low] < --temp


//=================================================================================================//

// [8, 4, 23, 42, 16, 15];

function quickSort(arr) {

  if (arr.length < 2) return arr;
  let left = 0;
  let right = arr.length - 1;

  _quickSort(arr, left, right);

  function _quickSort(arr, left, right) {

    if (left < right) {
      let position = partition(arr, left, right) //                                                                                                                           position is 2

      _quickSort(arr, left, position - 1) //                                                                                                                                   quickSort(arr, 0, 1)
      _quickSort(arr, position + 1, right) //                                                                                                                                  quickSort(arr, 3, 5)
    }
  }

  function partition(arr, left, right) {
    let pivot = arr[right]; // at index 5 is 15
    let low = left - 1; // low is -1

    for (let i = left; i < right; i++) { // i === 0; i < 5;        i === 1; i < 5;    i === 2; i < 5;    i === 3; i < 5      i === 4; i < 5
      if (arr[i] <= pivot) {             // 8 <= 15;               4 <= 15;           23 NOT <= 15;      42 not <= 15        16 NOT <= 15
        low++;                           // low is now 0;          low is now 1;                                             
        swap(arr, i, low)                // swap (arr, 0, 0);      swap (arr, 1, 1)                                          
      }
    }

    swap(arr, right, low + 1);                                                                                                                        // swap([8, 4, 23, 42, 16, 15], 5, 1+1)
    //                                                                                                                                                     [8, 4, 15, 42, 23, 23]
    return low + 1;                                                                                                                                   // return 2

  }

  function swap(arr, i, low) {
    let temp;
    temp = arr[i];                       // temp = 8                                                                          
    arr[i] = arr[low];                   // arr[0] = arr[0]; 8 = 8                                                            
    arr[low] = temp                      // arr[0] = 8;                                                                       
  }
}

let arr1 = [8, 4, 23, 42, 16, 15];

quickSort(arr1);

console.log(arr1);
