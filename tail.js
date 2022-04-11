// the tail of an array is not the last element of the array instead it is
// every element except from the head (first element) of an array

const tail = function(arr) {
  return arr.slice(1);
};


module.exports = tail;