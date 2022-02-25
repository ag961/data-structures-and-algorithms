
// Write a Fn that takes a BT as arg, as well as some integer

// see if there is a leaf whose pathway is equal to integer given
// if there is, return true


// Example input: Bt, 170									Output: true(boolean)

// Bt, 173								Output: false(boolean)

// — 17
//   |
//   — 132
//   |   |
//   |   — 24
//   |   |
//   |   — -3(negative three)
//   |
//   — 597
//   |
//       — -82(negative eighty - two)
//   |
//       — 61

function leafPathway(BT, int) {


  const _walk = (node, total) => {
    let newTotal = total - node.value;
    let result = false;
    console.log(newTotal)

    if (!node.left && !node.right && newTotal === 0) {
      // this is a leaf node
      result = true
      return result;
    }

    if (node.left) {
      result = _walk(node.left, newTotal);
      if(result) return result;
    }

    if (node.right) {
      result = _walk(node.right, newTotal);
      if(result) return result;
    }

    return result;

  }
  return _walk(BT.root, int);
}

const myBT = {
  root: {
    value: 10,
    left: {
      value: 20
    },
    right: {
      value: -15,
      left: {
        value: 25,
        right: {
          value: 40
        }
      }
    }
  }
};

console.log(leafPathway(myBT, 30)); //true
console.log(leafPathway(myBT, 60)); //true
console.log(leafPathway(myBT, 10)); //false
