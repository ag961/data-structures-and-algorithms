'use strict';

const PseudoQueue = require('../pseudo-queue');

describe('Pseudo-queue', () => {
  it('Can successfully enqueue into a queue', () =>{
    let myStack = new PseudoQueue();
    let testValue = 'Happy Birthday!';
    myStack.enqueue(testValue);
    expect(myStack.stack1.top.value).toEqual(testValue);
  });

  it('Can successfully enqueue multiple values into a queue', () =>{
    let myQueue = new PseudoQueue();
    let testValues = [20, 15, 10];
    testValues.forEach(num => myQueue.enqueue(num));
    expect(myQueue.stack1.top.value).toEqual(testValues[2]);
    expect(myQueue.stack1.top.next.value).toEqual(testValues[1]);
  });

  it('Can successfully dequeue out of a queue the expected value', () =>{
    let myQueue = new PseudoQueue();
    let testValues = [20, 15, 10, 5];
    testValues.forEach(num => myQueue.enqueue(num));
    let dequeuedValue = myQueue.dequeue();
    expect(dequeuedValue).toEqual(testValues[0]);
  });

  it('Can successfully empty a queue after multiple dequeues', () =>{
    let myQueue = new PseudoQueue();
    let testValues = ['Good morning!', 'Good afternoon!', 'Godd evening!'];
    testValues.forEach(string => myQueue.enqueue(string));
    for (let i = 0; i < testValues.length; i++){
      myQueue.dequeue();
    }
    expect(myQueue.stack1.isEmpty()).toBe(true);
  });

  it('Calling dequeue on an empty pseudo-queue raises exception', () =>{
    let myQueue = new PseudoQueue();
    expect(()=>myQueue.dequeue()).toThrow('Pseudo Queue is empty!');
  });
});
