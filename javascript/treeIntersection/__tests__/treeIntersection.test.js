'use strict';

const treeIntersection = require('../treeIntersection')

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }
}


const n1 = new Node(150)
const n2 = new Node(100)
const n3 = new Node(75)
const n5 = new Node(160)
const n6 = new Node(125)
const n7 = new Node(175)
const n8 = new Node(250)
const n9 = new Node(200)
const n10 = new Node(350)
const n11 = new Node(300)
const n12 = new Node(500)

const BT1 = new BinaryTree();

BT1.root = n1
BT1.root.left = n2
BT1.root.left.left = n3
BT1.root.left.right = n5
BT1.root.left.right.left = n6
BT1.root.left.right.right = n7
BT1.root.right = n8
BT1.root.right.left = n9
BT1.root.right.right = n10
BT1.root.right.right.left = n11
BT1.root.right.right.right = n12

const v1 = new Node(42)
const v2 = new Node(100)
const v3 = new Node(15)
const v5 = new Node(160)
const v6 = new Node(125)
const v7 = new Node(175)
const v8 = new Node(600)
const v9 = new Node(200)
const v10 = new Node(350)
const v11 = new Node(4)
const v12 = new Node(500)

const BT2 = new BinaryTree();

BT2.root = v1
BT2.root.left = v2
BT2.root.left.left = v3
BT2.root.left.right = v5
BT2.root.left.right.left = v6
BT2.root.left.right.right = v7
BT2.root.right = v8
BT2.root.right.left = v9
BT2.root.right.right = v10
BT2.root.right.right.left = v11
BT2.root.right.right.right = v12

describe('treeIntersection function', ()=>{
  test('will find common values among two binary trees', ()=>{
    expect(treeIntersection(BT1, BT2)).toEqual([100, 160, 125, 175, 200, 350, 500])
  })
  test('will return an empty array for empty binary trees', ()=>{
    const BT3 = new BinaryTree();
    const BT4 = new BinaryTree();
    expect(treeIntersection(BT3, BT4)).toEqual([])
  })
})

