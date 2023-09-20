const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddOrEven(input) {
  if (input % 2 === 0) {
    return "Genap";
  }
  return "Ganjil";
}

function changeArrayElements(inputArr, callback) {
  if (!Array.isArray(inputArr)) return "Array salah";
  if (typeof callback !== "function") return "Callback salah";
  const outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    outputArr[i] = callback(inputArr[i]);
  }

  return outputArr;
}

console.log(changeArrayElements(numbers, oddOrEven));
