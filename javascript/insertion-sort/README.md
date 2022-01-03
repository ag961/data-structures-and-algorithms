# Code Challenge 26: Insertion Sort

## Description

In this code challenge, I transform a given pseudocode of insertion sort algorithm into JavaScript working code, and write a blog article with step-by-step explanation of how it works.

## Author

Ayrat Gimranov

## Whiteboard Process

Click [here](BLOG.md) to read my blog article with step-by-step visual and explanation

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

At its worst, insertion sort runs runs at O(n^2) time complexity, due to having nested loops.

Big O for space complexity is O(1)

## Solution

```javascript
function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {

    let j = i - 1;
    let temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = temp;
  }
}

```

## Resources

CodeFellows 401 JS curriculum pseudocode.
