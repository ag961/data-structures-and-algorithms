'use strict';

const repeatedWord = require('../hashmapRepeatedWord');

describe('function repeatedWord', () => {

  let string1 = 'Once upon a time, there was a brave princess who...'
  let string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'
  let string3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'

  let noRepeat = 'I used to like snowboarding!'

  test('will return the first repeated word', () => {
    expect(repeatedWord(string1)).toEqual('a');
    expect(repeatedWord(string2)).toEqual('it');
    expect(repeatedWord(string3)).toEqual('summer');
  })
  test('will return null if there are no repeated words', () => {
    expect(repeatedWord(noRepeat)).toEqual(null);
  })
  test('will return null if the string is empty', () => {
    expect(repeatedWord('')).toEqual(null);
  })
  test('will return null if anything other than a string is passed in as an argument', () => {
    expect(repeatedWord(1001)).toEqual(null);
    expect(repeatedWord({ a: 1, b: 2 })).toEqual(null);
    expect(repeatedWord(undefined)).toEqual(null);
  })
})
