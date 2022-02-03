# Challenge Summary

Implement breadth-first traversal of a graph.

Write the following method for the Graph class:

- breadth first
- Arguments: Node
- Return: A collection of nodes in the order they were visited.
- Display the collection

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

We will be using a queue as a data structure to help us traverse all the verteces/nodes in the graph.


## Solution
<!-- Show how to run your code, and examples of it in action -->

This solution works for undirected graph only.

- use `addEdge(node1, node2[. weight])` to add unidrected edges
- use `breadthFirstTraversal()` method to receive an array of all values in teh order they were visited.

## Resources

This code was written with the help of CodeFellows instructor Alex White's demo code
Source: https://github.com/codefellows/seattle-javascript-401n19/blob/main/dsa/graph/utils/graph.js