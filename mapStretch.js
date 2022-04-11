const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map(function(obj) {
  // console.log(obj);
  let keyArray = [];
  for (const key in obj) {
    keyArray.push(obj[key]);
    // keyArray.push(input[key]);
  }
  let valueOfZ = (keyArray[0] * keyArray[0]) + (keyArray[1] * keyArray[1]);
  valueOfZ = Math.sqrt(valueOfZ);
  return valueOfZ;
}
);

console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);