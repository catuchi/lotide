const letterPositions = function(sentence) {
  // const lowerCaseSentence = sentence.toLowerCase();
  const results = {};

  // for (const letter of lowerCaseSentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        // results[lowerCaseSentence[i]] = [];
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
    
  }

  return results;
};

module.exports = letterPositions;