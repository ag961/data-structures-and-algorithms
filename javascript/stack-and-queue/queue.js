'use strict';

'use strict';

const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.front === null) {
      this.front = node;
      this.rear = this.front;
    } else {
      this.rear.next = node;
      this.rear = node;
    }

  }

  dequeue() {
    if (this.front === null) {
      throw new Error('Queue is empty');
    }
    else {
      let temp = this.front;
      if(this.front===this.rear){
        this.rear = null;
      }
      this.front = temp.next;
      temp.next = null;
      return temp;
    }
  }

  peek() {
    if (this.front === null) {
      throw new Error('Queue is empty');
    }
    return this.front.value;
  }

  isEmpty() {
    if (this.front === null & this.rear === null) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = Queue;
