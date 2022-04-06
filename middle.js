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
    console.log("👍👍");
  } else {
    console.log("👎👎");
  }
}

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

console.log(middle([1]));
console.log(middle([1, 2]));

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);