'use strict';

const LinkedList = require('../linked-list');
const zipList = require('../zipList');

let list1;
let list2;

beforeEach(() => {
  list1 = new LinkedList;
  list2 = new LinkedList;
});

describe('Two linked lists can zip into one', () => {

  it('if linked lists are of equal size', () => {
    let array1 = [1, 3, 2];
    let array2 = [5, 9, 4];
    array1.forEach(num => list1.append(num));
    array2.forEach(num => list2.append(num));
    expect(zipList(list1, list2).toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');
  });

  it('if first linked list is shorter than the second link', () => {
    let array1 = [1, 3];
    let array2 = [5, 9, 4];
    array1.forEach(num => list1.append(num));
    array2.forEach(num => list2.append(num));
    expect(zipList(list1, list2).toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL');
  });

  it('if first link is longer than the second linked list', () => {
    let array1 = [1, 3, 2];
    let array2 = [5, 9];
    array1.forEach(num => list1.append(num));
    array2.forEach(num => list2.append(num));
    expect(zipList(list1, list2).toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL');
  });
});
