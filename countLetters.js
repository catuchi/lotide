const assertEqual = require('./assertEqual');

const countLetters = function(sentence) /* string */ {
  // return a count of each of the letters in that sentence
  const lowerCaseSentence = sentence.toLowerCase();
  let countOfLetters = {};

  for (const letter of lowerCaseSentence) {
    // console.log(letter);
    if (letter !== " ") {
      if (countOfLetters[letter]) {
        countOfLetters[letter] += 1;
      } else {
        countOfLetters[letter] = 1;
      }
    }
  }
  // console.log(countLetters);
  return countOfLetters;
};

module.exports = countLetters;