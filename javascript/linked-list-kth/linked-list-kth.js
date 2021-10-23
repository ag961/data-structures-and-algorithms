'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    if (value) {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.size++;
        return this;
      }
      node.next = this.head;
      this.head = node;
      this.size++;
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

  kthFromEnd(k) {
    let length = 0;
    let array = [];
    if (typeof k !== 'number') {
      throw new Error('value of k has to be a number');
    }
    if(k || k >= 0) {
      if(this.head === null){
        throw new Error('Linked list is empty');
      }
      let currentNode = this.head;
      length++;
      array.push(currentNode.value);
      while(currentNode.next !== null){
        currentNode = currentNode.next;
        length++;
        array.push(currentNode.value);
      }
      let index = length - k;
      if (index >= 1){
        return array[index-1];
      }
      throw new Error('Exception: k is greater that length of a linked list');
    }
    throw new Error('value of k has to be a positive integer');
  }
}

module.exports = LinkedList;
