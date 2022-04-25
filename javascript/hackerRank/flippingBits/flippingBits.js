'use strict';

function flippingBits(n) {
  let arr = [];
  const _divideByTwo = (int) => {
    arr.push(int % 2 ? 1 : 0)
    let half = Math.floor(int / 2);
    if (half === 0) return
    else _divideByTwo(half)
  }

  _divideByTwo(n);
  return arr
}

console.log(flippingBits(9));


