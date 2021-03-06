const assertEqual = require('../assertEqual');
const head = require('../head')
const assert = require('chai').assert;

describe("#head", () => {
  it("should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("should return 2 for [2]", () => {
    assert.strictEqual(head([2]), 2);
  });
  it ("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs'] ", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

