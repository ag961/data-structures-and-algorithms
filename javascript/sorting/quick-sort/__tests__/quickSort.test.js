'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
const quickSort = require('../quickSort');

describe('quickSort function', () => {

  it('sorts numerical values in the array from lesser to greater', () => {
    let array1 = [8, 4, 23, 42, 16, 15];
    let result = [4, 8, 15, 16, 23, 42];
    quickSort(array1);
    console.log(array1);
    expect(array1).toEqual(result);
  });

  it('is able to sort letters', () => {
    let lettersOnly = ['b', 'c', 'f', 'a', 'g', 'z', 'l'];
    let lettersOnlySorted = ['a', 'b', 'c', 'f', 'g', 'l', 'z'];
    quickSort(lettersOnly);
    expect(lettersOnly).toEqual(lettersOnlySorted);
  });

  it('returns an empty array', ()=>{
    let emptyArr = [];
    expect(quickSort(emptyArr)).toEqual([]);
  });

  it('returns an array of one element', ()=>{
    let emptyArr = [10];
    expect(quickSort(emptyArr)).toEqual([10]);
  });
});
