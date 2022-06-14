'use strict';

let lengthOfLongestSubstring = function (s) {

  let myMap = new Map();

  let longest = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {

    if (myMap.has(s[i])) {
      let index = myMap.get(s[i]);
      if (index >= left) {
        left = index + 1;
      }
    }

    myMap.set(s[i], i);
    let currWindow = i - left + 1;
    if (currWindow > longest) {
      longest = currWindow;
    }
  }
  return longest;
};

module.exports = lengthOfLongestSubstring;
