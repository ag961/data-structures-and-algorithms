# Code Challenge 37 - Summary

Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Feature Task

Write a function called business trip

- Arguments: graph, array of city names
- Return: cost or null
- Determine whether the trip is possible with direct flights, and how much it would cost.

| Input       | Output      |
| ----------- | ----------- |
| [Metroville, Pandora, ]      | 	True, $82      |
| [Arendelle, New Monstropolis, Naboo]  | True, $115        |
| [Naboo, Pandora] | False, $0 |
| [Narnia, Arendelle, Naboo] | False, $0 |

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Time - O(n*|E|), where E is neighbors of input nodes
Space - O(1)

## Solution
<!-- Show how to run your code, and examples of it in action -->
Provide the graph, and two nodes that exist in the graph.