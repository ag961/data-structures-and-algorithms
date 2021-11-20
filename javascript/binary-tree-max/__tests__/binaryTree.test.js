'use strict';

const BT = require('../binaryTree');

describe('Binary Tree', () => {
  it('Correctly find maximum value in the tree', () => {
    let newTree = new BT();

    newTree.addBinarySearch(50);

    newTree.addBinarySearch(20);

    newTree.addBinarySearch(60);

    newTree.addBinarySearch(10);

    newTree.addBinarySearch(1000);
    newTree.addBinarySearch(-1000);

    newTree.addBinarySearch(65);

    expect(newTree.findMax()).toBe(1000);
  });
});
