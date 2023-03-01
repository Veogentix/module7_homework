const inputObject = {
  a: 3,
  b: 5,
  c: 7,
  d: 12,
};
function findKey(key, outputObject) {
  let counter = "false";
  for (let x in outputObject) {
    if (x == key) counter = "true";
  }
  return counter;
}
let inputKey = prompt("Input key to find: ");
let result = findKey(inputKey, inputObject);
console.log(result);