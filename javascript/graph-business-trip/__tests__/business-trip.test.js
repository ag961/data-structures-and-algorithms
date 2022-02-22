'use strict';
const { Graph } = require('../../graph/graph');
const businessTrip = require('../business-trip');

const citiesGraph = new Graph();

let pandora = citiesGraph.addNode('Pandora');
let arendelle = citiesGraph.addNode('Arendelle');
let metroville = citiesGraph.addNode('Metroville');
let monstropolis = citiesGraph.addNode('Monstropolis');
let naboo = citiesGraph.addNode('Naboo');
let narnia = citiesGraph.addNode('Narnia');


citiesGraph.addUndirectedEdge(pandora, arendelle, 150);
citiesGraph.addUndirectedEdge(metroville, pandora, 82);
citiesGraph.addUndirectedEdge(metroville, arendelle, 99);
citiesGraph.addUndirectedEdge(metroville, narnia, 37);
citiesGraph.addUndirectedEdge(metroville, naboo, 26);
citiesGraph.addUndirectedEdge(metroville, monstropolis, 105);
citiesGraph.addUndirectedEdge(arendelle, monstropolis, 42);
citiesGraph.addUndirectedEdge(monstropolis, naboo, 73);
citiesGraph.addUndirectedEdge(naboo, narnia, 250);

describe('function businessTrip', () => {
  it('returns true if direct flights exist between multiple cities, as well as the total cost', () => {
    expect(businessTrip(citiesGraph, [pandora, metroville])).toEqual([true, '$82'])
    expect(businessTrip(citiesGraph, [arendelle, monstropolis, naboo])).toEqual([true, '$115'])
  })
  it('returns false if no direct flights exist between the cities', () => {
    expect(businessTrip(citiesGraph, [naboo, pandora])).toEqual([false, '$0'])
    expect(businessTrip(citiesGraph, [narnia, arendelle, naboo])).toEqual([false, '$0'])
  })
})
