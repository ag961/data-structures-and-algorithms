'use strict';


const Node = require('./node');
const BT = require('./bt');

class BST extends BT {

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

  contains(value) {
    let _contains = (inputValue, root) => {

      if (root === null) {
        return false;
      }
      if (root.value === inputValue) {
        return true;
      }
      if (inputValue < root.value) {
        return _contains(inputValue, root.left);
      }
      if (inputValue > root.value) {
        return _contains(inputValue, root.right);
      }

    };
    let result = _contains(value, this.root);
    return result;
  }

}

let myBST = new BST();

myBST.add(50);

myBST.add(20);

myBST.add(60);

myBST.add(10);

myBST.add(55);

myBST.add(65);

myBST.add(1000);

myBST.add(58);

myBST.add(15);

myBST.add(30);


myBST.add(29);
myBST.add(31);

console.log(myBST.contains(60));

console.log('RESULT', JSON.stringify(myBST, null, 2));

module.exports = BST;



