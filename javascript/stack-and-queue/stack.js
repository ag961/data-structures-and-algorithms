'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top === null) {
      throw new Error('Stack is empty');
    } else {
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp;
    }
  }

  peek() {
    if (this.top === null) {
      throw new Error('Stack is empty');
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = Stack;
