const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    // console.log("length not same");
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log("diff elements");
      return false;
    }
  }

  return true;
};

const eqObjects = function(object1, object2) {

  // assertEqual(object1, object2);

  const obj1KeyCount = Object.keys(object1);
  const obj2KeyCount = Object.keys(object2);
  if (obj1KeyCount.length !== obj2KeyCount.length) return false;

  for (const objKey of obj1KeyCount) {
    if (Array.isArray(object1[objKey])) {
      if (Array.isArray(object2[objKey])) {
        return eqArrays(object1[objKey], object2[objKey]);
        // return console.log(eqArrays(object1[objKey], object2[objKey]));
      }
    }
    if (object1[objKey] !== object2[objKey]) {
      return false;
    }


  }

  return true;
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// console.log(eqObjects(ab, ba));
assertObjectsEqual(ab, ba);