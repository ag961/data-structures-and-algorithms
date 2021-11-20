'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
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

  addBinarySearch(value) {

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

  findMax() {
    if (this.root === null) {
      throw 'Error: Binary Tree is empty';
    }
    else {
      let max = null;
      let _preOrderMax = (root, maxValue) => {
        if (root !== null) {

          if (root.value > maxValue) {
            maxValue = root.value;
          }

          if (root.left !== null) {
            maxValue = _preOrderMax(root.left, maxValue);
          }

          if (root.right !== null) {
            maxValue = _preOrderMax(root.right, maxValue);
          }
        }
        return maxValue;
      };

      max = this.root.value;
      return _preOrderMax(this.root, max);
    }
  }
}

module.exports = BinaryTree;

