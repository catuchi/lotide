const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(sourceArray) {
  let middleArray = [];
  const midPointOdd = (sourceArray.length - 1) / 2;
  const midPointEven = (sourceArray.length / 2);
  // returns an array with only the middle elements
  if (sourceArray.length <= 2) {
    return middleArray;
  }

  if (sourceArray.length % 2 === 1) {
    middleArray.push(sourceArray[midPointOdd]);
  }

  if (sourceArray.length % 2 === 0) {
    middleArray.push(sourceArray[midPointEven - 1]);
    middleArray.push(sourceArray[midPointEven]);
  } 

  return middleArray;
}

module.exports = middle;