const findKeyByValue = function(anObject, aValue) {
  for (const objectKey in anObject) {
    if (aValue === anObject[objectKey]) {
      return objectKey;
    } 
  }
};

module.exports = findKeyByValue;