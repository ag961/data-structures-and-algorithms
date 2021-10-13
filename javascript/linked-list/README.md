# 401-JS: Code Challenge 5 - Linked List Implementation

## Challenge

- Node
  - Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Linked List: Create a Linked List class. The class should contain the following methods:
  - insert
    - Adds a new node with that value to the head of the list with an O(1) Time performance.
  - includes
    - Indicates whether that value exists as a Node’s value somewhere within the list.
  - to string
    - Returns: a string representing all the values in the Linked List, formatted as: ```"{ a } -> { b } -> { c } -> NULL"```
- Provide semantic, custom errors, rather than a default error thrown by Javascript.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used a ```WHILE``` loop for ```includes``` and ```toString``` methods in this Linked List, because it results an efficient O(n) Time performance of Big O. The Time performance of ```toString``` directly related to the number of Nodes in the Linked List.

```insert```  method provides O(1) Time perforemance, as it doesn't matter how long the Linked List is.

## API
<!-- Description of each method publicly available to your Linked List -->
- insert
  - Adds a new node with that value to the head of the list with an O(1) Time performance.
- includes
  - Indicates whether that value exists as a Node’s value somewhere within the list.
- to string
  - Returns: a string representing all the values in the Linked List, formatted as: ```"{ a } -> { b } -> { c } -> NULL"```
