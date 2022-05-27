'use strict';

const mergeSort = require('../mergeSort');

describe('mergeSort function', () => {

  it('sorts numerical values in the array from lesser to greater', () => {
    let array1 = [8, 4, 23, 42, 16, 15];
    let result = [4, 8, 15, 16, 23, 42];
    mergeSort(array1);
    console.log(array1);
    expect(array1).toEqual(result);
  });

  it('is able to sort letters', () => {
    let lettersOnly = ['b', 'c', 'f', 'a', 'g', 'z', 'l'];
    let lettersOnlySorted = ['a', 'b', 'c', 'f', 'g', 'l', 'z'];
    mergeSort(lettersOnly);
    expect(lettersOnly).toEqual(lettersOnlySorted);
  });
});
