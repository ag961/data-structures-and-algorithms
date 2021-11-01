# 401-JS: Code Challenge 10 - Stack and Queue

## Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

Stack class should contain following methods: push, pop, peek, isEmpty.

Queue class should containt the following methods: enqueue, dequeue, peek, isEmpty.
  
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
All methods on queue and stack have O(1) for time.


## API
<!-- Description of each method publicly available to your Linked List -->
### Stack

- push(value)
  - adds a new node with that value to the top of the stack with an O(1) Time performance.
- pop()
  - Returns: the value from node from the top of the stack
  - Removes the node from the top of the stack
- peek()
  - Returns: Value of the node located at the top of the stack
- isEmpty()
  - Returns: Boolean indicating whether or not the stack is empty.

### Queue

- enqueue(value)
  - adds a new node with that value to the back of the queue with an O(1) Time performance.
- dequeue()
  - Returns: the value from node from the front of the queue
  - Removes the node from the front of the queue
- peek()
  - Returns: Value of the node located at the front of the queue
- isEmpty()
  - Returns:  Boolean indicating whether or not the queue is empty.
  
