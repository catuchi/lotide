const without = function(source, itemsToRemove) {
  let remainder = [];
  // remainder array will be a subset of source after itemsToRemove
  // are removed

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      remainder.push(source[i]);
    }
  }

  return remainder;
};

module.exports = without;