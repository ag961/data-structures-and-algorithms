# 401-JS: Code Challenge 18 - K-ary trees: Fizz Buzz Tree

## Challenge

Write a function called fizz buzz tree

- Arguments: k-ary tree
- Return: new k-ary tree

Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- If the value is not divisible by 3 or 5, simply turn the number into a String.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Using a WHILE loop we are traversing the entire tree and at the same time using a queue.

Big O time - O(n);

## Test

fizzBuzzTree.js incudes a test, that uses a manually constructed terniary tree and a visual console log.

The function does not modify the instance of a class Tree. However, it returns a copy with nested objects, rather than nested deep copies of Node instances, which is a limitation of a current solution.
