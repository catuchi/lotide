const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  const value = eqArrays(firstArray, secondArray);
  if (value === true) {
    console.log("good");
  } else {
    console.log("not good");
  }
}

module.exports = assertArraysEqual;