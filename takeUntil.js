const takeUntil = function(array, callback) {
  // this function will keep collecting items from "array" till "callback" returns a truthy value
  const subArray = [];
  for (const item of array) {
    let test = callback(item);
    //  console.log(test);
    if (test === false) {
      subArray.push(item);
    }
    if (test === true) {
      return subArray;
    }
  }
  return subArray;
  
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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
};




assertArraysEqual(results1, [1,2,5,7,2]);
