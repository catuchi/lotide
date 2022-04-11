// the tail of an array is not the last element of the array instead it is
// every element except from the head (first element) of an array

const tail = function(arr) {
  // let myArray = arr;
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  if (arr.length === 1){
    return myArray;
  }
  arr.shift();
  console.log(arr);
  return arr;
};

module.exports = tail;