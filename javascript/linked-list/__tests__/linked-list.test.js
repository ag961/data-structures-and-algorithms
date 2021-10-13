'use strict';

// Require our linked list implementation
const LinkedLilst = require('../linked-list');

describe('Linked List', () => {
  it('instanciates an empty linked list', () => {
    let myLinkedList = new LinkedLilst();
    expect(myLinkedList.head).toBeNull();
  });

  it('can properly insert into the linked list', () => {
    let myLinkedList = new LinkedLilst();
    let myCar = 'Toyota';
    myLinkedList.insert(myCar);
    console.log(myLinkedList);
    expect(myLinkedList.head.value).toEqual(myCar);
  });

  it('the head propery will point to the first node', () => {
    let myLinkedList = new LinkedLilst();
    let myCar = 'Toyota';
    myLinkedList.insert(myCar);
    let newCar = 'Lexus';
    myLinkedList.insert(newCar);
    expect(myLinkedList.head.value).toEqual(newCar);
  });

  it('can properly insert multiple nodes into the linked list', () => {
    let myLinkedList = new LinkedLilst();
    let myFirstCar = 'Toyota';
    myLinkedList.insert(myFirstCar);
    let newCar = 'Lexus';
    myLinkedList.insert(newCar);
    let newestCar = 'Ford';
    myLinkedList.insert(newestCar);
    expect(myLinkedList.head.next.next.value).toEqual(myFirstCar);
  });

  it('will return true when finding a value within the linked list that exists', () => {
    let myLinkedList = new LinkedLilst();
    let myFirstCar = 'Toyota';
    myLinkedList.insert(myFirstCar);
    let newCar = 'Lexus';
    myLinkedList.insert(newCar);
    let newestCar = 'Ford';
    myLinkedList.insert(newestCar);
    expect(myLinkedList.includes(newCar)).toBe(true);
  });

  it('will return false when searching for a value in the linked list that does not exist', () => {
    let myLinkedList = new LinkedLilst();
    let myFirstCar = 'Toyota';
    myLinkedList.insert(myFirstCar);
    let newCar = 'Lexus';
    myLinkedList.insert(newCar);
    let newestCar = 'Ford';
    myLinkedList.insert(newestCar);
    let myDreamCar = 'Jaguar';
    expect(myLinkedList.includes(myDreamCar)).toBe(false);
  });

  it('can properly return a collection of all the values that exist in the linked list', () => {
    let myLinkedList = new LinkedLilst();
    let myFirstCar = 'Toyota';
    myLinkedList.insert(myFirstCar);
    let newCar = 'Lexus';
    myLinkedList.insert(newCar);
    let newestCar = 'Ford';
    myLinkedList.insert(newestCar);
    let myDreamCar = 'Jaguar';
    myLinkedList.insert(myDreamCar);
    let result = myLinkedList.toString();
    expect(result).toEqual(`{ ${myDreamCar} } -> { ${newestCar} } -> { ${newCar} } -> { ${myFirstCar} } -> NULL`);
  });
});
