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

const assertArraysEqual = function(firstArray, secondArray) {
  const value = eqArrays(firstArray, secondArray);
  if (value === true) {
    console.log("good");
  } else {
    console.log("not good");
  }
}

const without = function(source, itemsToRemove) {
  let remainder = [];
  // remainder array will be a subset of source after itemsToRemove
  // are removed

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      remainder.push(source[i]);
    }
  }

  return remainder;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual((without(words, ["lighthouse"])), ["hello", "world"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);