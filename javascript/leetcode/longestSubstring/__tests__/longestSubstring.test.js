'use strict';

const longestSubstring = require('../longestSubstring');

describe('Longest Substring Without Repeating Characters', () => {

  test('abcabcbb', () => {
    expect(longestSubstring('abcabcbb')).toEqual(3)
  });

  test('bbbbb', () => {
    expect(longestSubstring('bbbbbb')).toEqual(1)
  });

  test('pwwkew', () => {
    expect(longestSubstring('pwwkew')).toEqual(3)
  });

  test('abba', () => {
    expect(longestSubstring('abba')).toEqual(2)
  });

  test('abccb', () => {
    expect(longestSubstring('abccb')).toEqual(3)
  });

  test('abccba', () => {
    expect(longestSubstring('abccba')).toEqual(3)
  });

  test('professor', () => {
    expect(longestSubstring('professor')).toEqual(6)
  });

  test('salmonserbic', () => {
    expect(longestSubstring('salmonserbic')).toEqual(11)
  });

  test('salmonsalmosalmonella', () => {
    expect(longestSubstring('salmonsalmosalmonella')).toEqual(7)
  });
})
