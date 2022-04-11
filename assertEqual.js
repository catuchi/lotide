const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// other ways to export
// module.exports.assertEqual = assertEqual;

// module.exports = {
//   assertEqual
// };

// module.exports = {
//   "assertEqual": assertEqual
// }