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

module.exports = takeUntil;