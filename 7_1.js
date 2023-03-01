const inputObject = {
  a: 3,
  b: 5,
  c: 7,
};
function displayObject(outputObject) {
  console.log("Ключ: Значение");
  for (let key in outputObject) {
    if (outputObject.hasOwnProperty(key)) {
      console.log(key + " : " + outputObject[key]);
    }
  }
}
displayObject(inputObject);