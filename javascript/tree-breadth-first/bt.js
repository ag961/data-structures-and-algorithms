'use strict';

const Queue = require('./queue');
const Node = require('./node');

class BT {
  constructor() {
    this.root = null;
  }

  preOrder() {

    let resultArr = [];

    let _preOrder = (root) => {

      if (root !== null) {
        resultArr.push(root.value);
        if (root.left !== null) {
          _preOrder(root.left);
        }
        if (root.right !== null) {
          _preOrder(root.right);
        }
      }

    };
    _preOrder(this.root);
    return resultArr;
  }

  inOrder() {

    let resultArr = [];

    let _inOrder = (root) => {

      if (root !== null) {

        if (root.left !== null) {
          _inOrder(root.left);
        }

        resultArr.push(root.value);

        if (root.right !== null) {
          _inOrder(root.right);
        }
      }
    };
    _inOrder(this.root);
    return resultArr;
  }

  postOrder() {

    let resultArr = [];

    let _postOrder = (root) => {
      if (root !== null) {

        if (root.left !== null) {
          _postOrder(root.left);
        }

        if (root.right !== null) {
          _postOrder(root.right);
        }

        resultArr.push(root.value);
      }
    };
    _postOrder(this.root);
    return resultArr;
  }

  add(value) {

    let _add = (inputValue, root) => {

      if (root === null) {
        root = new Node(inputValue);
      }
      else if (root.value === inputValue) {
        throw `Binary Search Tree already contains ${inputValue}. Nothing was added to the tree`;
      }
      else if (inputValue < root.value) {
        root.left = _add(inputValue, root.left);
      }
      else if (inputValue > root.value) {
        root.right = _add(inputValue, root.right);
      }

      return root;
    };

    try {
      this.root = _add(value, this.root);
    } catch (error) {
      console.log(error);
    }
  }

  breadthFirst() {

    let resultArr = [];
    let traverseQueue = new Queue();
    traverseQueue.enqueue(this.root);

    while (traverseQueue.peek() !== null) {
      let dequeuedNode = traverseQueue.dequeue();
      resultArr.push(dequeuedNode.value);

      if (dequeuedNode.left !== null) {
        traverseQueue.enqueue(dequeuedNode.left);
      }
      if (dequeuedNode.right !== null) {
        traverseQueue.enqueue(dequeuedNode.right);
      }
    }

    return resultArr;
  }
}

module.exports = BT;
