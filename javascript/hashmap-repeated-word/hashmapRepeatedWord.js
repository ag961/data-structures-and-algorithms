'use strict';

const Hashtable = require('./hashtable');

function repeatedWord(string) {

  if(string === '' || typeof string !== 'string') return null;

  let noCharacters = string.replace(/[^a-zA-Z0-9’' ]/g, '');
  let wordsArray = noCharacters.split(' ');

  let myHashmap = new Hashtable(1024);

  for (let word of wordsArray) {
    if (myHashmap.contains(word.toLowerCase())) {
      return word
    }
    myHashmap.add(word.toLowerCase(), word.toLowerCase())
  }

  return null;
}

module.exports = repeatedWord;

let string1 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'

console.log(repeatedWord(string1))
