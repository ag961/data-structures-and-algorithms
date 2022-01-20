'use strict';

const Hashtable = require('./hashtable')

function treeIntersection(BT1, BT2) {

  let myHashmap = new Hashtable(1024);
  let commonValues = [];

  const _hashTreeValues = (root) => {
    if (!root) return
    myHashmap.add(root.value, root.value)
    if (root.left) _hashTreeValues(root.left)
    if (root.right) _hashTreeValues(root.right)
  }

  _hashTreeValues(BT1.root)

  const _checkCommonValues = (root) => {
    if (!root) return
    if (myHashmap.contains(root.value)) commonValues.push(root.value)
    if (root.left) _checkCommonValues(root.left)
    if (root.right) _checkCommonValues(root.right)
  }

  _checkCommonValues(BT2.root)

  return commonValues
}

module.exports = treeIntersection;
