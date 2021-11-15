'use strict';

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
}

module.exports = BT;
