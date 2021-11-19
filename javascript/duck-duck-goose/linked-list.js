'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(value) {

    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.size++;
      newNode.next = this.head;
    }
    else {

      let currentNode = this.head;

      while (currentNode.next !== this.head) {
        currentNode = currentNode.next;
      }
      newNode.next = this.head;
      currentNode.next = newNode;
      this.size++;
    }
  }
}

let myCLL = new LinkedList();

myCLL.add('Kate');
myCLL.add('Nick');
myCLL.add('Mike');
myCLL.add('Jeremy');
myCLL.add('Alex');
myCLL.add('Ayrat');

console.log(myCLL.head);

module.exports = LinkedList;
