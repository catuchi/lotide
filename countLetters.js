const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
}

const testSentence = "I am the best programmer in Ottawa";

// countLetters(testSentence);
console.log(countLetters(testSentence));