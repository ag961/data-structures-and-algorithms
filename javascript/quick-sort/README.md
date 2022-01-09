# Code Challenge 28: Quick Sort

## Description

In this code challenge, we transform a given pseudocode of quick sort algorithm into JavaScript working code, and write a blog article with step-by-step explanation of how it works.

## Author

Ayrat Gimranov

## Whiteboard Process

Click [here](BLOG.md) to read my blog article with step-by-step visual and explanation

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

At its worst, quick sort runs runs at O(n^2) time complexity.

Big O for space complexity is O(1)

## Solution

```javascript
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

```

## Resources

CodeFellows 401 JS curriculum pseudocode.
