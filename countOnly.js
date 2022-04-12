const countOnly = function (allItems, itemsToCount) /*(anArray, anObject)*/ {
  // this function will return an object containing counts of every-
  // thing that the input object listed
  const results = {}

  for (const item of allItems) {
    // console.log(item);
    // results[item] 
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

  }
  return results;
}

module.exports = countOnly;