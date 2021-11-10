'use strict';

const AnimalShelter = require('../queue');

describe('For Stack class', () => {
  let myShelter = new AnimalShelter();
  let cat1 = { type: 'cat', name: 'Kitten' };
  let cat2 = { type: 'cat', name: 'Omar' };
  let cat3 = { type: 'cat', name: 'Haru' };
  let dog1 = { type: 'dog', name: 'Zork' };
  let dog2 = { type: 'dog', name: 'Barky' };
  let dog3 = { type: 'dog', name: 'Snoop' };

  myShelter.enqueue(cat1);
  myShelter.enqueue(dog1);
  myShelter.enqueue(cat2);
  myShelter.enqueue(dog2);
  myShelter.enqueue(cat3);
  myShelter.enqueue(dog3);

  it('Can successfully enqueue cats and dogs into a shelter', () => {

    expect(myShelter.front.value).toEqual(cat1);
    expect(myShelter.rear.value).toEqual(dog3);
  });

  it('Can successfully dequeqe cats and dogs out of a shelter', () => {

    expect(myShelter.dequeue('dog')).toEqual(dog1);
    expect(myShelter.dequeue('cat')).toEqual(cat1);
    expect(myShelter.front.value).toEqual(cat2);
    expect(myShelter.rear.value).toEqual(dog3);
  });

  it('Returns any front animal if no pref is given', () => {
    let beenWaitingLongest = myShelter.front.value;
    expect(myShelter.dequeue()).toEqual(beenWaitingLongest);
  });

  it('Returns null if anything other than cat or dog is passed', () => {
    expect(myShelter.dequeue('bird')).toBe(null);
  });
});
