'use strict';

const HashTable = require('./hashtable');


function commonWord(string) {

  let lowercase = string.toLowerCase();
  let wordsOnlyString = lowercase.replace(/[^a-zA-Z ]/g, '');
  let wordsArray = wordsOnlyString.split(' ');

  let myHashmap = new HashTable(10);

  let mostCommonWord = {
    current: '',
    count: 0
  }

  wordsArray.forEach((word, indexOfWord) => {
    if (myHashmap.contains(word)) {
      let increasedCount = myHashmap.get(word) + 1;
      myHashmap.add(word, increasedCount);
      if (mostCommonWord.count < increasedCount) {
        mostCommonWord.current = word;
        mostCommonWord.count = increasedCount;
      } else if (mostCommonWord.count === increasedCount) {
        if (indexOfWord < wordsArray.indexOf(mostCommonWord.current)) {
          mostCommonWord.current = word;
        }
      }
    }
    else {
      myHashmap.add(word, 1)
      if (mostCommonWord.count < 1) {
        mostCommonWord.current = word;
        mostCommonWord.count = 1;
      }
    }
  })
  return mostCommonWord.current;

}

console.log(commonWord('In a galaxy far far away'));
console.log(commonWord('Taco cat ate a taco'));
console.log(commonWord('No. Try not. Do or do not. There is no try.'));
