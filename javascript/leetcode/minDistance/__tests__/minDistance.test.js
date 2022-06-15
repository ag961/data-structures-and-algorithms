'use strict';

const minDistance = require('../minDistance');

describe('Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same. In one step, you can delete exactly one character in either string.', ()=>{

  test('sea - eat', ()=>{
    expect(minDistance('sea', 'eat').toEqual(2));
  });

  test('leetcode - etco', ()=>{
    expect(minDistance('leetcode', 'etco').toEqual(4));
  })

  test('sea - ate', ()=>{
    expect(minDistance('sea', 'ate').toEqual(4));
  })

})
