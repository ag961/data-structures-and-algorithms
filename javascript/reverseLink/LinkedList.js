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
  }

  append(value) {
    if (value) {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        return this;
      }
      else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
      }
    } else {
      throw new Error('Please provide a valid value to add to the linked list');
    }
  }

  reverse() {

    if (this.head === null) {
      return this;
    }

    let current = this.head;
    let temp;
    let previous;

    while (current !== null) {

      temp = current.next;
      current.next = previous;
      previous = current;
      if(previous === this.head){
        previous.next = null;
      }
      current = temp;
    }

    this.head = previous;
    previous = null;
  }

}

let newLL = new LinkedList();



newLL.append(30);
newLL.append(40);
newLL.append(50);
newLL.append(60);
newLL.reverse();

console.log('reversed', JSON.stringify(newLL, null, 2));
newLL.reverse();
console.log('reversed', JSON.stringify(newLL, null, 2));



module.exports = LinkedList;
