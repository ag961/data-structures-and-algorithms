'use strict';

const HashTable = require('../hashtable')
const hashmapLeftJoin = require('../hashmapLeftJoin');

let hm1 = new HashTable(30);

hm1.add('diligent', 'employed');
hm1.add('fond', 'enamored');
hm1.add('guide', 'usher');
hm1.add('outfit', 'garb');
hm1.add('wrath', 'anger');

let hm2 = new HashTable(30);

hm2.add('diligent', 'idle');
hm2.add('fond', 'averse');
hm2.add('guide', 'follow');
hm2.add('flow', 'jam');
hm2.add('wrath', 'delight');

let expectedResult = [
  [ 'guide', 'usher', 'follow' ],
  [ 'wrath', 'anger', 'delight' ],
  [ 'diligent', 'employed', 'idle' ],
  [ 'outfit', 'garb', null ],
  [ 'fond', 'enamored', 'averse' ]
];

describe('hashmapLeftJoin', ()=>{
  test('will append values from a right hashtable to a left hastable of the same key', ()=>{
    expect(hashmapLeftJoin(hm1, hm2)).toEqual(expectedResult)
  })
})
