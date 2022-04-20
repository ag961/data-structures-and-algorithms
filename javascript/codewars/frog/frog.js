function jumpTo(x, y) {
  let steps = 0;
  while (x !== y) {
    if ((y % 2 === 0) && (y - x >= x)) {
      y = y / 2;
    }
    else {
      y = y - 1;
    }
    steps = steps + 1;
  }
  return steps
}

module.exports = jumpTo;
