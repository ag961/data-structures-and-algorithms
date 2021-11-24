const BT = require('../bt');

describe('Binary Tree', () => {
  it('breadthFirst correctly traverses the binary tree', () => {
    let newTree = new BT();

    newTree.add(10);
    newTree.add(20);
    newTree.add(5);
    newTree.add(2);
    newTree.add(4);
    newTree.add(30);
    newTree.add(40);

    expect(newTree.breadthFirst()).toEqual([10, 5, 20, 2, 30, 4, 40]);
  });
});
