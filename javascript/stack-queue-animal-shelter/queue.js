'use strict';

const Node = require('./node');

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    let animalNode = new Node(animal);
    if (this.front === null) {
      this.front = animalNode;
      this.rear = this.front;
    } else {
      this.rear.next = animalNode;
      this.rear = animalNode;
    }
  }

  dequeue(pref) {
    if (this.front === null) {
      throw new Error('Queue is empty');
    }
    else {
      if (!pref || this.front.value.type === pref) {
        let temp = this.front;
        if (this.front === this.rear) {
          this.rear = null;
        }
        this.front = temp.next;
        temp.next = null;
        return temp.value;
      }
      else {
        let currentNode = this.front;
        let previous;
        while (currentNode !== null) {

          if (currentNode.value.type === pref) {
            previous.next = currentNode.next;
            currentNode.next = null;
            return currentNode.value;
          }
          previous = currentNode;
          currentNode = currentNode.next;
        }
        console.log(`We don't have any ${pref}s in our shelter!`);
        return null;
      }
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

let myShelter = new AnimalShelter();


let cat1 = { type: 'cat', name: 'Kitten'};
let cat2 = { type: 'cat', name: 'Omar'};
let cat3 = { type: 'cat', name: 'Haru'};

let dog1 = { type: 'dog', name: 'Zork'};
let dog2 = { type: 'dog', name: 'Barky'};
let dog3 = { type: 'dog', name: 'Snoop'};

myShelter.enqueue(cat1);
myShelter.enqueue(dog1);
myShelter.enqueue(cat2);
myShelter.enqueue(dog2);
myShelter.enqueue(cat3);
myShelter.enqueue(dog3);

module.exports = AnimalShelter;
