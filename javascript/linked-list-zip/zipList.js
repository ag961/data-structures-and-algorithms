'use strict';

const LinkedList = require('./linked-list');

function zipList(linkedList1, linkedList2) {

  let zippedList = new LinkedList;
    
  let current1 = linkedList1.head;
  let current2 = linkedList2.head;

  while (current1 !== null && current2 !== null) {
    zippedList.append(current1.value);
    zippedList.append(current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }

  if (current1 === null && current2 === null) {
    return zippedList;
  }

  else if (current1 === null && current2 !== null) {
    while (current2 !== null){
      zippedList.append(current2.value);
      current2 = current2.next;
    }
    return zippedList;
  }

  else {
    while (current1 !== null){
      zippedList.append(current1.value);
      current1 = current1.next;
    }
    return zippedList;
  }
}

module.exports = zipList;

