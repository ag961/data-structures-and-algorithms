// Problem domain: given a ginary tree, return an array of all leaf values.

// Input: BT
// Output: [75, 125, 175, 200, 300, 500]

// algorithm (iterative), pre-order traversal

// check if the root is not empty - base case
// if it's not, set current node as node.root
// start an empty array
// start WHILE loop with a condition
// check if there is current.left
// check if there is current.right
// if none, push current.value into array
// return the array

function btLeafValues(bt) {
  let leafValues = [];
  let queue = [];
  if (!bt.root) return leafValues;
  queue.push(bt.root)

  while (queue.length) {
    let poppedNode = queue.shift();
    if (!poppedNode.left && !poppedNode.right) leafValues.push(poppedNode.value);
    if (poppedNode.left) queue.push(poppedNode.left)
    if (poppedNode.right) queue.push(poppedNode.right)
  }

  return leafValues
}

let myBT = {
  root: {
    value: 150,
    left: {
      value: 100,
      left: {
        value: 75,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 250,
      left: null,
      right: null
    }
  }
}

console.log(btLeafValues(myBT))

