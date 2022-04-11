const assertEqual = require('./assertEqual');

//other ways to import are:
// const { assertEqual } = require('./assertEqual');

const head = function(arr) {
  return arr[0];
};

module.exports = head;