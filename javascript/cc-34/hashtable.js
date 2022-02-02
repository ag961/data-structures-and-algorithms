'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  append(key, value) {

    let node = new Node({ [key]: value });

    if (!this.head) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    if (key in currentNode.value) {
      currentNode.value[key] = value;
      return
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
      if (key in currentNode.value) {
        currentNode.value[key] = value;
        return
      }
    }
    currentNode.next = node;

  }

  findByKey(key) {
    let current = this.head;
    let searching = true;
    while (current && searching) {
      if (current.value[key]) {
        searching = false
        return current.value[key]
      }
      current = current.next
    }
    return null;
  }
}

class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size)
  }

  add(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }

    this.table[index].append(key, value);
  }

  get(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      return this.table[index].findByKey(key);
    }
    return null;
  }

  contains(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      let current = this.table[index].head;
      let searching = true;
      while (current && searching) {
        if (current.value[key]) {
          searching = false
          return true
        }
        current = current.next
      }
    }
    return false
  }

  hash(key) {
    let charCodeArr = key.toString().split('').map(char => char.charCodeAt());
    let sum = charCodeArr.reduce((prev, curr) => {
      return prev + curr
    }, 0);
    let index = (sum * 599) % this.size;
    return index
  }
}

module.exports = Hashtable;

