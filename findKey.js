const findKey = function(object, callback) {
  // this function should scan object and return the first key for when the callback returns a truthy value
  for (const objectKey in object) {
    if (callback(object[objectKey])) {
      return objectKey;
    }

  }
};

module.exports = findKey;