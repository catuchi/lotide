const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("should return 'Rook' for ['Rook']", () => {
    assert.deepEqual(tail(['Rook']), []);
  });
})