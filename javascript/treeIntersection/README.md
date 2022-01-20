# Code Challenge 32 - Tree Intersection

Find common values in 2 binary trees.

## Feature Task

- Write a function called tree_intersection that takes two binary trees as parameters.
- Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

## Author

Ayrat Gimranov

## Approach & Efficiency

The approach is to hash all the values of a first binary tree (I chose a recursive method). Next, we traverse the second binary tree, and are checking to see if our hashmap already contains each of the values.

So, time complexity is O(n), as we have to visit each node of the binary tree.
