'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    if (value) {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.size++;
        return this;
      }
      else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.size++;
        return this;
      }
    } else {
      throw new Error('Please provide a valid value to add to the linked list');
    }
  }

  insertBefore(value, newValue) {
    if (value && newValue) {
      if (this.head === null) {
        throw new Error('Linked list is empty. Add at least one value first');
      }
      let oldValue = value;
      let newNode = new Node(newValue);
      let currentNode = this.head;

      if (this.head.value === value) {
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return this;
      }
      let previous;
      while (currentNode !== null) {
        if (currentNode.value === oldValue) {
          newNode.next = currentNode;
          previous.next = newNode;
          this.size++;
          return;
        }
        previous = currentNode;
        currentNode = currentNode.next;
      }
      throw new Error('value not found');
    }
    else {
      throw new Error('both input values have to be valid');
    }
  }

  insertAfter(value, newValue) {
    if (value && newValue) {

      let newNode = new Node(newValue);
      if (this.head === null) {
        throw new Error('Linked list empty. Add at least one value first');
      }
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          this.size++;
          return this;
        }
        currentNode = currentNode.next;
      }
      throw new Error('no requested value found in the link');
    } else {
      throw new Error('both input values have to be valid');
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
