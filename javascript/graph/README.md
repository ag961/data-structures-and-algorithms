# Graphs

In this code challenge I implement a graph data structure.

## Challenge

Implement a graph data structure as an adjacency list that includes the following methods:

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection
- size
  - Arguments: none
  - Returns the total number of nodes in the graph

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->


## API
<!-- Description of each method publicly available in your Graph -->
- `addNode(value)` - returns an added vertex 

- `addDirectedEdge(startingNode, endingNode[, weight])` - creates a directed edge from startingNOde to endingNode. Optional weight can be passed in. Otherwise weight property will be undefined.

- `getNodes()` - returns an interable object with a list of all verteces in the order of addition in a [key, value] format.

- `getNeighbors(vertex)` - returns a shallow copy of an array of neighboring verteces.

- `size()` - returns the size of graph. Return null for an empty graph.

## Resources

CodeFellows Instructor Alex White demo code