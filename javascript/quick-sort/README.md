# Code Challenge 28: Quick Sort

## Description

In this code challenge, we transform a given pseudocode of quick sort algorithm into JavaScript working code, and write a blog article with step-by-step explanation of how it works.

## Author

Ayrat Gimranov

## Whiteboard Process

Click [here](BLOG.md) to read my blog article with step-by-step visual and explanation

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

At its worst, merge sort runs runs at O(n log(n)) time complexity.

Big O for space complexity is O(n)

## Solution

```javascript
function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);
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

```

## Resources

CodeFellows 401 JS curriculum pseudocode.
