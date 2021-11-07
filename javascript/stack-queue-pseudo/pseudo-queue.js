'use strict';

const Stack = require('./stack');

class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue(){
    if(this.stack1.isEmpty()){
      throw new Error('Pseudo Queue is empty!');
    }

    while(this.stack1.top.next !== null){
      let top = this.stack1.pop();
      this.stack2.push(top.value);
    }
    let result = this.stack1.pop();

    while(!this.stack2.isEmpty()){
      let top2 = this.stack2.pop();
      this.stack1.push(top2.value);
    }
    return result.value;
  }
}

module.exports = PseudoQueue;

