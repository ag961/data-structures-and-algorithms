'use strict';

let lengthOfLongestSubstring = function (s) {
  let counter = 0;

  //  make a queue
  let queue = [];

  for (let i = 0; i < s.length; i++) {

    while (queue.includes(s[i])) {
      queue.shift();
    }

    queue.push(s[i]);
    if (queue.length > counter) {
      counter = queue.length;
    }
  }

  return counter;

};


console.log(lengthOfLongestSubstring('abcadbcbb'))

