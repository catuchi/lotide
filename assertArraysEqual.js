const { eqArrays } = require('./eqArrays');

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     // console.log("length not same");
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       // console.log("diff elements");
//       return false;
//     }
//   }

//   return true;
// };

const assertArraysEqual = function(firstArray, secondArray) {
  const value = eqArrays(firstArray, secondArray);
  if (value === true) {
    console.log("good");
  } else {
    console.log("not good");
  }
}

module.exports = assertArraysEqual;