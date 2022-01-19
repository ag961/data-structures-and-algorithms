'use strict';

const Hashtable = require('../hashtable');

describe('hashtable', () => {

  let myHashtable = new Hashtable(5);

  let me = {
    name: 'ayrat',
    city: 'kazan'
  }

  let instructor = {
    name: 'alex',
    city: 'seattle'
  }

  it('can add key/valye pairs', () => {
    myHashtable.add(me.name, me.city);
    myHashtable.add(instructor.name, instructor.city);
    expect(myHashtable.contains(me.name)).toBe(true);
    expect(myHashtable.contains(instructor.name)).toBe(true);
    expect(myHashtable.contains('charlie')).toBe(false);
  })

  it('can retrieve a value based on the input key', () => {
    expect(myHashtable.get(me.name)).toEqual(me.city)
    expect(myHashtable.get(me.name)).not.toEqual(instructor.city)
  })

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(myHashtable.get('charlie')).toBe(null)
  })

  it('Successfully handles a collision', () => {
    myHashtable.add('tom', 'new york')
    expect(myHashtable.table[4].head.value).toBeTruthy()
    expect(myHashtable.table[4].head.next.value).toBeTruthy()
  })

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(myHashtable.get('tom')).toEqual('new york')
  })
});
