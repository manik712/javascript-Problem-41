//Create a function that takes an array as an argument and returns true or false depending on
//whether the average of all elements in the array is a whole number or not.

function isWholeNumber(arr) {
  let sum = 0;

  //for loop ...
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  //return the result..

  let average = sum / arr.length;
  console.log(average);

  if (Number.isInteger(average)) {
    return true;
  } else {
    return false;
  }
}

console.log(isWholeNumber([5, 5, 5]));
