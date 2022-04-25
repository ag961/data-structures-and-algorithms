'use strict';

function flippingBits(n) {
  let flippedBinary = [];
  const _divideByTwo = (int) => {
    flippedBinary.push(int % 2 ? 0 : 1)
    let half = Math.floor(int / 2);
    if (half === 0) return
    else _divideByTwo(half)
  }
  _divideByTwo(n);

  let pad = new Array(32 - flippedBinary.length).fill(1);
  flippedBinary.push(...pad);
  let result = 0;
  for (let i = 0; i < flippedBinary.length; i++){
    let val = flippedBinary[i] * (2 ** i);
    result += val;
  }
  return result
}

console.log(flippingBits(0));


