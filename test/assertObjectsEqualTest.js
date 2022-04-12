const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// console.log(eqObjects(ab, ba));
assertObjectsEqual(ab, ba);