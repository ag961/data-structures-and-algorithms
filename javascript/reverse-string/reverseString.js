'use strict';

function reverse1(string) {
  let stringArr = string.split('');
  let result = [];
  stringArr.forEach(char => {
    result.unshift(char)
  })
  return result.join('');
}

function reverse2(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

function reverse3(string) {
  let result = '';
  let i = 0;

  function _walk(index) {
    if (string[index + 1]) {
      _walk(index + 1);
    }
    result += string[index];
  }
  _walk(i);
  return result;
}

console.log(reverse1('Code Fellows'));
console.log(reverse2('Code Fellows'));
console.log(reverse3('Code Fellows'));
