'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (value) {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        return this;
      }
      node.next = this.head;
      this.head = node;
    } else {
      throw new Error('Please provide a valid value to add to the linked list');
    }
  }

  includes(value) {
    if (value) {
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    } else {
      throw new Error('Please provide a valid value to search the linked list');
    }
  }

  toString() {
    let finalString = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      finalString += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    finalString += 'NULL';
    return finalString;
  }
}

module.exports = LinkedList;
