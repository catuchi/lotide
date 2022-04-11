// define a function eqArrays
// function should take in two arrays as arguments
// function should return a true or false value based of in the two
// arguments are a perfect match

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

module.exports = eqArrays;