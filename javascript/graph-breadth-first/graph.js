'use strict';

// this code was written with the help of CodeFellows instructor Alex White's demo code
// ref: https://github.com/codefellows/seattle-javascript-401n19/blob/main/dsa/graph/utils/graph.js

class Vertex {
  constructor(value) {
    this.value = value
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    const newVertex = new Vertex(value);
    this.adjacencyList.set(newVertex, []);
    return newVertex;
  }

  addDirectedEdge(startingNode, endingNode, weight) {

    if (!this.adjacencyList.has(startingNode) || !this.adjacencyList.has(endingNode)) {
      throw new Error('Must have both verteces in graph')
    }
    let neighborsOfStarting = this.adjacencyList.get(startingNode);
    let newEdge = new Edge(endingNode, weight);
    neighborsOfStarting.push(newEdge);
  }

  addUndirectedEdge(startingNode, endingNode, weight) {

    if (!this.adjacencyList.has(startingNode) || !this.adjacencyList.has(endingNode)) {
      throw new Error('Must have both verteces in graph')
    }
    let neighborsOfStarting = this.adjacencyList.get(startingNode);
    let newEdge = new Edge(endingNode, weight);
    neighborsOfStarting.push(newEdge);

    let neighborsOfEnding = this.adjacencyList.get(endingNode);
    let returnEdge = new Edge(startingNode, weight);
    neighborsOfEnding.push(returnEdge);
  }

  getNodes() {
    return this.adjacencyList.entries();
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error(`Vertex ${vertex} is not in graph`)
    }
    return [...this.adjacencyList.get(vertex)]
  }

  size() {
    return this.adjacencyList.size === 0 ? null : this.adjacencyList.size;
  }

  breadthFirstTraversal(startNode){

    if(!this.adjacencyList.has(startNode)){
      throw new Error('Could not find the starting node within a graph')
    }
    const queue = [];
    const visitedNodes = new Set();
    let results = [];
    
    queue.push(startNode);
    visitedNodes.add(startNode);

    while(queue.length){
      let dequeuedNode = queue.pop();
      results.push(dequeuedNode.value);
      let neighbors = this.getNeighbors(dequeuedNode);

      if(neighbors.length){
        for(let neighbor of neighbors){
          if(visitedNodes.has(neighbor.vertex)){
            continue
          } else {
            queue.unshift(neighbor.vertex);
            visitedNodes.add(neighbor.vertex);
          }
          
        }
      }
    }
    return results;
    
  }
}

module.exports = Graph;

let myGraph = new Graph();

let n1 = myGraph.addNode(10);
let n2 = myGraph.addNode(20);
let n3 = myGraph.addNode(30);
let n4 = myGraph.addNode(40);
let n5 = myGraph.addNode(50);
let n6 = myGraph.addNode(60);

myGraph.addDirectedEdge(n1,n2);
myGraph.addDirectedEdge(n1,n3);
myGraph.addDirectedEdge(n2,n4);
myGraph.addDirectedEdge(n3,n1);
myGraph.addDirectedEdge(n4,n5);
myGraph.addDirectedEdge(n6,n5);
myGraph.addDirectedEdge(n5,n2);

console.log(myGraph.breadthFirstTraversal(n6));
