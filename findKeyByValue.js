const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(anObject, aValue) {
  // const keys = Object.keys(anObject);
  // for (const objectKey of keys) {
  for (const objectKey in anObject) {
    // console.log(objectKey);
    if (aValue === anObject[objectKey]) {
      // console.log("👍");
      // console.log(objectKey);
      return objectKey;
    } 
  }

};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));