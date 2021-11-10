# 401-JS: Code Challenge 6 - Linked List Insertions

## Challenge

- Create a class called AnimalShelter which holds only dogs and cats.
- The shelter operates using a first-in, first-out approach.
- Implement the following methods:
  - enqueue
    - Arguments: animal
    - animal can be either a dog or a cat object.
  - dequeue
    - Arguments: pref
    - pref can be either "dog" or "cat"
    - Return: either a dog or a cat, based on preference.
    - If pref is not "dog" or "cat" then return null.

### Stretch goal

If a cat or dog isn’t preferred, return whichever animal has been waiting in the shelter the longest.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

  I am using a WHILE loop to iterate through the animal shelter queue from. Hence, the Big O for time is (n);

## API
<!-- Description of each method publicly available to your Linked List -->
- enqueue(object)
  - adds a cat or a dog object
- dequeue(pref)
  - Returns: preferred animal type object closest to the front of the queue
  - Removes that animal from the queue
- peek()
  - Returns: Value of the node located at the front of the queue
- isEmpty()
  - Returns:  Boolean indicating whether or not the queue is empty.
  
<!-- ## WB

![WB](code-challenge-12.png) -->
