'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list-insertions');

describe('Linked List', () => {

  it('adds a single node and multiple nodes with the given value to the end of the list', () => {
    let myLinkedList = new LinkedList();
    let myFirstCar = 'Toyota';
    myLinkedList.append(myFirstCar);
    let mySecondCar = 'Lexus';
    myLinkedList.append(mySecondCar);
    let myThirdCar = 'Ford';
    myLinkedList.append(myThirdCar);
    let result = myLinkedList.toString();
    expect(result).toEqual(`{ ${myFirstCar} } -> { ${mySecondCar} } -> { ${myThirdCar} } -> NULL`);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list and before the first node of a linked list', () => {
    let myLinkedList = new LinkedList();
    let myFirstCar = 'Toyota';
    myLinkedList.append(myFirstCar);
    let mySecondCar = 'Lexus';
    myLinkedList.append(mySecondCar);
    let myThirdCar = 'Ford';
    myLinkedList.append(myThirdCar);
    let myFourthCar = 'Chevy';
    myLinkedList.append(myFourthCar);
    let myInsertedCar = 'Jaguar';
    myLinkedList.insertBefore(myThirdCar, myInsertedCar);

    let result = myLinkedList.toString();
    expect(result).toEqual(`{ ${myFirstCar} } -> { ${mySecondCar} } -> { ${myInsertedCar} } -> { ${myThirdCar} } -> { ${myFourthCar} } -> NULL`);

    let myEarliestVehicle = 'Moped';

    myLinkedList.insertBefore(myFirstCar, myEarliestVehicle);
    let result2 = myLinkedList.toString();
    expect(result2).toEqual(`{ ${myEarliestVehicle} } -> { ${myFirstCar} } -> { ${mySecondCar} } -> { ${myInsertedCar} } -> { ${myThirdCar} } -> { ${myFourthCar} } -> NULL`);
  });

  it('Can successfully insert after a node in the middle of the linked list. Can successfully insert a node after the last node of the linked list', () => {
    let myLinkedList = new LinkedList();
    let myFirstCar = 'Toyota';
    myLinkedList.append(myFirstCar);
    let mySecondCar = 'Lexus';
    myLinkedList.append(mySecondCar);
    let myThirdCar = 'Ford';
    myLinkedList.append(myThirdCar);

    let myFiat = 'Fiat';
    myLinkedList.insertAfter(mySecondCar, myFiat);

    let insertedAfterLast = 'Mercedes';
    myLinkedList.insertAfter(myThirdCar, insertedAfterLast);

    let result = myLinkedList.toString();
    expect(result).toEqual(`{ ${myFirstCar} } -> { ${mySecondCar} } -> { ${myFiat} } -> { ${myThirdCar} } -> { ${insertedAfterLast} } -> NULL`);
  });
});


