'use strict';
const { Vertex, Edge, Graph } = require('../graph/graph');

function businessTrip(graph, arrCityNames) {

// traverse the graph to find the origin city and return the vertex

arrCityNames.



}


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

// console.log(citiesGraph)

businessTrip(citiesGraph, ['Pandora', 'Arendelle'])
