# Code Challenge 30 - Hastables

In this code challenge I implement a hashtable with fetures outlined below.

## Challenge

Implement a Hashtable Class with the following methods:

- `add`

- `get`

- `contains`

- `hash`

**Functionality:**

- Adding a key/value to your hashtable results in the value being in the data structure
- Retrieving based on a key returns the value stored
- Successfully returns null for a key that does not exist in the hashtable
- Successfully handles a collision within the hashtable
- Successfully retrieves a value from a bucket within the hashtable that has a collision
- Successfully hashes a key to an in-range value

## Approach & Efficiency

Time complexity - average - O(1). Worst case scenario - O(n)

## API

- `add`
  Arguments: key, value
  Returns: nothing
  This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- `get`
  Arguments: key
  Returns: Value associated with that key in the table
- `contains`
  Arguments: key
  Returns: Boolean, indicating if the key exists in the table already.
- `hash`
  Arguments: key
  Returns: Index in the collection for that key

## Resources

Alex White (instructor) demo code
