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

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

// console.log(map(words, num => num + 2));
// const result1 = map(words, num => num.toUpperCase());
const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, w => w[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(numbers, n => n * 2), [2, 4, 6, 8, 10]);



console.log(results1);

