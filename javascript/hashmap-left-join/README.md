# Code Challenge 33 - LEFT JOIN for 2 Hashmaps

mplement a simplified LEFT JOIN for 2 Hashmaps.

## Feature Task

Write a function that LEFT JOINs two hashmaps into a single data structure.

- Write a function called left join
- Arguments: two hash maps
  - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
  - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

### Notes:

- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
- If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Author

Ayrat Gimranov

## Approach & Efficiency

We are iterating through the LEFT hashtable of size 1024, filtering out the empty slots. When we stumble upon an existing result (it will be in a form of a linked list), we iterate through the linked list. As we iterate, we grab the key stored in each node of a linked list, then get the value of that key from the left hashmap (Big O(1)), and then from the right hashmap (Big O(2)), out them into an array, then push that array in an outcome array.

So, time complexity - is O(n), where n is the size of a left hashmap.
