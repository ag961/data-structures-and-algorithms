const {assert} = require('chai');
const jumpTo = require('../frog/frog');

describe('jumpTo', () => {
  it('should pass basic tests', () => {
    assert.strictEqual(jumpTo(1, 8), 3, 'jumpTo(1, 8)');
    assert.strictEqual(jumpTo(1, 17), 5, 'jumpTo(1, 17)');
    assert.strictEqual(jumpTo(1, 15), 6, 'jumpTo(1, 15)');
    assert.strictEqual(jumpTo(3, 12), 2, 'jumpTo(3, 12)');
    assert.strictEqual(jumpTo(3, 16), 3, 'jumpTo(3, 16)');
    assert.strictEqual(jumpTo(3, 17), 4, 'jumpTo(3, 17)');
    assert.strictEqual(jumpTo(10, 19), 9, 'jumpTo(10, 19)');
  });
});
