'use strict';

const { Graph } = require('../graph');

let newGraph = new Graph();
const addedVertex1 = newGraph.addNode(1000);
const addedVertex2 = newGraph.addNode(2000);
newGraph.addDirectedEdge(addedVertex1, addedVertex2, 3)

describe('Graph', ()=>{
  test('Node can be successfully added to the graph', ()=>{
    expect(addedVertex1.value).toBe(1000);
    expect(newGraph.adjacencyList.has(addedVertex1)).toBe(true);
  })

  test('An edge can be successfully added to the graph', ()=>{
    expect(newGraph.getNeighbors(addedVertex1)[0].vertex).toEqual(addedVertex2)
  })

  test('A collection of all nodes can be properly retrieved from the graph', ()=>{
    let nodes = newGraph.getNodes();
    let nodeArray = [];
    for(let node of nodes){
      nodeArray.push(node)
    }
    expect(nodeArray[0][0]).toEqual(addedVertex1);
    expect(nodeArray[1][0]).toEqual(addedVertex2);
  })

  test('All appropriate neighbors can be retrieved from the graph', ()=>{
    expect(newGraph.getNeighbors(addedVertex1)[0].vertex).toEqual(addedVertex2)
  })

  test('Neighbors are returned with the weight between nodes included', ()=>{
    expect(newGraph.getNeighbors(addedVertex1)[0].weight).toEqual(3)
  })

  test('The proper size is returned, representing the number of nodes in the graph', ()=>{
    expect(newGraph.size()).toEqual(2)
  })

  test('A graph with only one node and edge can be properly returned', ()=>{
    const singleNodeGraph = new Graph();
    const nodeA = singleNodeGraph.addNode(55);
    singleNodeGraph.addDirectedEdge(nodeA, nodeA);
    expect(singleNodeGraph.size()).toEqual(1);
  })

  test('An empty graph properly returns null', ()=>{
    const emptyGraph = new Graph();
    expect(emptyGraph.size()).toEqual(null)
  })
})
