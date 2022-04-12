const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(firstObject, secondObject) {
  const inspect = require('util').inspect;
  const assertionReport = eqObjects(firstObject, secondObject);
  if (assertionReport === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(firstObject)} === ${inspect(secondObject)}`);
    // console.log("✅✅✅ Both objects are the same");
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(firstObject)} === ${inspect(secondObject)}`);
    // console.log("❌❌❌ Both objects are not the same");

  }
};

module.exports = assertObjectsEqual;