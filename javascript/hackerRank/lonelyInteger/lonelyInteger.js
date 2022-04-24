'use strict';

function lonelyinteger(a) {

  let obj = new Map()
  a.forEach(num => {
    if (obj.has(num)) {
      obj.set(num, obj.get(num) + 1);
    } else {
      obj.set(num, 1);
    }
  })

  let res;
  let min;
  obj.forEach((val, key) => {
    if (!res || val < min) {
      res = key;
      min = val
    }
  })

  return res;
}

module.exports = lonelyinteger;
