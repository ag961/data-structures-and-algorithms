'use strict';

const BST = require('../bst');

describe('Binary Search Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let emptyTree = new BST();

    expect(emptyTree.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BST();
    tree.add(10);
    expect(tree.root.value).toBe(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BST();
    tree.add(10);
    tree.add(5);
    expect(tree.root.left.value).toBe(5);
    tree.add(15);
    expect(tree.root.right.value).toBe(15);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BST();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.preOrder()).toEqual([10, 5, 15]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let tree = new BST();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.inOrder()).toEqual([5, 10, 15]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BST();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.postOrder()).toEqual([5, 15, 10]);
  });
});
