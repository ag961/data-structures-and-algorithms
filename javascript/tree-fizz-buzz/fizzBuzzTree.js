'use strict';

const Node = require('./node');
const Queue = require('./queue');

class Tree {
  constructor() {
    this.root = null;
  }
}

function fizzBuzzTree(tree) {

  let myQueue = new Queue();

  function clone(instance) {
    return Object.assign(Object.create(Object.getPrototypeOf(instance)), JSON.parse(JSON.stringify(instance)));
  }

  let treeCopy = clone(tree);
  let dequeuedNode = treeCopy.root;

  if (treeCopy.root !== null) {
    myQueue.enqueue(treeCopy.root);
  } else {
    throw new Error('tree is empty');
  }

  while (myQueue.peek() !== null) {

    dequeuedNode = myQueue.dequeue();

    if (dequeuedNode.children !== null) {

      for (const child of dequeuedNode.children) {
        myQueue.enqueue(child);
      }
    }
    if (dequeuedNode.value % 3 === 0 && dequeuedNode.value % 5 === 0) { dequeuedNode.value = 'FizzBuzz'; }
    else if (dequeuedNode.value % 3 === 0) { dequeuedNode.value = 'Fizz'; }
    else if (dequeuedNode.value % 5 === 0) { dequeuedNode.value = 'Buzz'; }
    else { dequeuedNode.value = `${dequeuedNode.value}`; }
  }

  return treeCopy;
}

// ================== test ========================

// Manually building a terniary tree
let myTree = new Tree();
let rootNode = new Node(10);
myTree.root = rootNode;
let newNode1 = new Node(15);
let newNode2 = new Node(21);
let newNode3 = new Node(5);
myTree.root.children = [newNode1, newNode2, newNode3];
let newNode1_1 = new Node(3);
let newNode1_2 = new Node(7);
myTree.root.children[0].children = [newNode1_1, newNode1_2];
let newNode2_1 = new Node(16);
myTree.root.children[1].children = [newNode2_1];
let newNode3_1 = new Node(30);
let newNode3_2 = new Node(20);
let newNode3_3 = new Node(27);
myTree.root.children[2].children = [newNode3_1, newNode3_2, newNode3_3];
let newNode2_1_1 = new Node(2);
let newNode2_1_2 = new Node(45);
let newNode2_1_3 = new Node(13);
myTree.root.children[1].children[0].children = [newNode2_1_1, newNode2_1_2, newNode2_1_3];

console.log('== This the tree we have built ==');
console.dir(myTree, { depth: null });

// Visual of a tree:
//                           10
//                       /   |   \
//                      /    |    \
//                    15     21     5
//                   / \    |     / | \
//                  3   7   16  30 20 27
//                         / | \
//                       2  45  13


let result = fizzBuzzTree(myTree);
console.log('========result=========');
console.dir(result, { depth: null });
console.log('========original=========');
console.dir(myTree, { depth: null });


module.exports = fizzBuzzTree;

