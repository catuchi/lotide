// const map = function(array, callBackFunction) {
//   // this function will return a new array


// };

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}

const words = ["ground", "control", "to", "major", "tom"];

// console.log(map(words, num => num + 2));
// const result1 = map(words, num => num.toUpperCase());
const results1 = map(words, word => word[0]);



console.log(results1);