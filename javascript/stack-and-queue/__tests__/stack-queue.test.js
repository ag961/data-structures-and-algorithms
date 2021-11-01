'use strict';

const Stack = require('../stack');
const Queue = require('../queue');

describe('For Stack class', () => {
  it('Can successfully push onto a stack', () =>{
    let myStack = new Stack();
    let testValue = 'Happy Birthday!';
    myStack.push(testValue);
    expect(myStack.top.value).toEqual(testValue);
  });

  it('Can successfully push multiple values onto a stack', () =>{
    let myStack = new Stack();
    let testValues = ['Good morning!', 'Good afternoon!', 'Godd evening!'];

    testValues.forEach(string => myStack.push(string));
    expect(myStack.top.value).toEqual(testValues[2]);
    expect(myStack.top.next.value).toEqual(testValues[1]);
    expect(myStack.top.next.next.value).toEqual(testValues[0]);
  });

  it('Can successfully pop off the stack', () =>{
    let myStack = new Stack();
    let testValues = ['Good morning!', 'Good afternoon!', 'Godd evening!'];

    testValues.forEach(string => myStack.push(string));

    expect(myStack.top.value).toEqual(testValues[2]);
    expect(myStack.top.next.value).toEqual(testValues[1]);

    let poppedNode = myStack.pop();
    expect(poppedNode.value).toEqual(testValues[2]);
    expect(poppedNode.next).toBe(null);
    expect(myStack.top.value).toEqual(testValues[1]);
  });

  it('Can successfully empty a stack after multiple pops', () =>{
    let myStack = new Stack();
    let testValues = ['Good morning!', 'Good afternoon!', 'Godd evening!'];

    testValues.forEach(string => myStack.push(string));

    expect(myStack.top.value).toEqual(testValues[2]);
    expect(myStack.top.next.value).toEqual(testValues[1]);
    expect(myStack.top.next.next.value).toEqual(testValues[0]);

    for (let i = 0; i < testValues.length; i++){
      myStack.pop();
    }
    expect(myStack.isEmpty()).toBe(true);
  });

  it('Can successfully peek the next item on the stack', () =>{
    let myStack = new Stack();
    let testValues = ['Good morning!', 'Good afternoon!', 'Godd evening!'];

    testValues.forEach(string => myStack.push(string));
    expect(myStack.peek()).toEqual(testValues[2]);
  });

  it('Can successfully instantiate an empty stack', () =>{
    let myStack = new Stack();
    expect(myStack.isEmpty()).toBe(true);
    expect(myStack.top).toBe(null);
  });

  it('Calling pop or peek on empty stack raises exception', () =>{
    let myStack = new Stack();
    expect(myStack.isEmpty()).toBe(true);
    expect(myStack.top).toBe(null);
    expect(()=>myStack.peek()).toThrow('Stack is empty');
    expect(()=>myStack.pop()).toThrow('Stack is empty');
  });
});



// 

describe('For Queue class', () => {
  it('Can successfully enqueue into a queue', () =>{
    let myStack = new Queue();
    let testValue = 'Happy Birthday!';
    myStack.enqueue(testValue);
    expect(myStack.front.value).toEqual(testValue);
  });

  it('Can successfully enqueue multiple values into a queue', () =>{
    let myQueue = new Queue();
    let testValues = ['Good morning!', 'Good afternoon!', 'Good evening!'];

    testValues.forEach(string => myQueue.enqueue(string));
    expect(myQueue.front.value).toEqual(testValues[0]);
    expect(myQueue.front.next.value).toEqual(testValues[1]);
    expect(myQueue.rear.value).toEqual(testValues[2]);
  });

  it('Can successfully dequeue out of a queue the expected value', () =>{
    let myQueue = new Queue();
    let testValues = ['Good morning!', 'Good afternoon!', 'Good evening!'];

    testValues.forEach(string => myQueue.enqueue(string));

    expect(myQueue.front.value).toEqual(testValues[0]);
    expect(myQueue.front.next.value).toEqual(testValues[1]);

    let dequeuedNode = myQueue.dequeue();
    expect(dequeuedNode.value).toEqual(testValues[0]);
    expect(dequeuedNode.next).toBe(null);
    expect(myQueue.front.value).toEqual(testValues[1]);
  });

  it('Can successfully empty a queue after multiple dequeues', () =>{
    let myQueue = new Queue();
    let testValues = ['Good morning!', 'Good afternoon!', 'Godd evening!'];

    testValues.forEach(string => myQueue.enqueue(string));

    for (let i = 0; i < testValues.length; i++){
      myQueue.dequeue();
    }
    expect(myQueue.isEmpty()).toBe(true);
  });

  it('Can successfully peek into a queue, seeing the expected value', () =>{
    let myQueue = new Queue();
    let testValues = ['Good morning!', 'Good afternoon!', 'Godd evening!'];

    testValues.forEach(string => myQueue.enqueue(string));
    expect(myQueue.peek()).toEqual(testValues[0]);
  });

  it('Can successfully instantiate an empty Queue', () =>{
    let myQueue = new Queue();
    expect(myQueue.isEmpty()).toBe(true);
  });

  it('Calling dequeue or peek on empty queue raises exception', () =>{
    let myQueue = new Queue();
    expect(myQueue.isEmpty()).toBe(true);
    expect(myQueue.front).toBe(null);
    expect(()=>myQueue.peek()).toThrow('Queue is empty');
    expect(()=>myQueue.dequeue()).toThrow('Queue is empty');
  });
});
