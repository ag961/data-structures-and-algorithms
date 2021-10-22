# 401-JS: Code Challenge 7 - Linked List k-th value from the end of a linked list

## Challenge

Write the following methods for the Linked List class:

- kth from end
  - argument: a number, k, as a parameter.
  - Return the node’s value that is k places from the tail of the linked list.
  - You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
  
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

  I am using a WHILE loop to iterate through the list from start to end. Hence, the Big O for time is (n);

## API
<!-- Description of each method publicly available to your Linked List -->

- insert(value)
  - Adds a new node with that value to the head of the list with an O(1) Time performance.
- includes(value)
  - Indicates whether that value exists as a Node’s value somewhere within the list.
- toString()
  - Returns: a string representing all the values in the Linked List, formatted as: ```"{ a } -> { b } -> { c } -> NULL"```
- append(value)
  - adds a new node with the given value to the end of the list
- insertBefore(value, newValue)
  - adds a new node with the given new value immediately before the first node that has the value specified
- insertAfter(value, newValue)
  - adds a new node with the given new value immediately after the first node that has the value specified
- kthFromEnd(k)
  - Return the node’s value that is k places from the tail of the linked list
  