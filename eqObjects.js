const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  // assertEqual(object1, object2);

  const obj1KeyCount = Object.keys(object1);
  const obj2KeyCount = Object.keys(object2);
  if (obj1KeyCount.length !== obj2KeyCount.length) return false;

  for (const objKey of obj1KeyCount) {
    if (Array.isArray(object1[objKey])) {
      if (Array.isArray(object2[objKey])) {
        return eqArrays(object1[objKey], object2[objKey]);
        // return console.log(eqArrays(object1[objKey], object2[objKey]));
      }
    }
    if (object1[objKey] !== object2[objKey]) {
      return false;
    }


  }

  return true;
};

module.exports = eqObjects;