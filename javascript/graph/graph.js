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
    this.addDirectedEdge(startingNode, endingNode, weight);
    this.addDirectedEdge(endingNode, startingNode, weight);
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
}

module.exports = { Vertex, Edge, Graph };

