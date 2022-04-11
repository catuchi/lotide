const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log(eqArrays([1, 2, 3], [1, 3, 3]));

assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), true);