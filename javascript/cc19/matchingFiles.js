'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BT {
  constructor() {
    this.root = null;
  }
}

const matchingFileStructure = (tree1, tree2) => {

  let counter1 = 0;
  let counter2 = 0;

  let _preOrder = (node) => {

    if (node.left === null && node.right === null) {
      counter1++;
    }

    if (node.left !== null) {
      _preOrder(node.left);
    }

    if (node.right !== null) {
      _preOrder(node.right);
    }
  };

  _preOrder(tree1.root);

  let _preOrder2 = (node) => {

    if (node.left === null && node.right === null) {
      counter2++;
    }

    if (node.left !== null) {
      _preOrder2(node.left);
    }

    if (node.right !== null) {
      _preOrder2(node.right);
    }
  };

  _preOrder2(tree2.root);

  console.log('counter1', counter1);
  console.log('counter2', counter2);
  if (counter1 === counter2) {
    return true;
  }
  else {
    return false;
  }
};

let myTree1 = new BT();
let myTree2 = new BT();

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

//===================test================//
myTree1.root = node1;
myTree1.root.left = node2;

myTree2.root = node3;




console.log(matchingFileStructure(myTree1, myTree2)); //should evaluate true, since each tree has 1 leaf

myTree1.root.right = node4; //adding extra leaf to myTree1

console.log(matchingFileStructure(myTree1, myTree2)); //should evaluate false, since myTree1 now has 2 leafs;
