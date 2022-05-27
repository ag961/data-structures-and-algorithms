'use strict';

function quickSort(arr) {
  if (arr.length < 2) return arr
  let left = 0
  let right = arr.length - 1

  _quickSort(arr, left, right);

  function _quickSort(arr, left, right) {
    if (left < right) {
      let position = partition(arr, left, right)
      _quickSort(arr, left, position - 1)
      _quickSort(arr, position + 1, right)
    }
  }

  function partition(arr, left, right) {
    let pivot = arr[right]
    let low = left - 1

    for (let i = left; i < right; i++) {
      if (arr[i] <= pivot) {
        low++
        swap(arr, i, low)
      }
    }

    swap(arr, right, low + 1)
    return low + 1
  }

  function swap(arr, i, low) {
    let temp
    temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp
  }

  return arr;
}

module.exports = quickSort;

