//Take an array of integers (positive or negative or both) and
//return the sum of the absolute value of each element.

// getAbsSum([2, -1, 4, 8, 10]) ➞ 25
function isAbsNumber(arr) {
  let sum = 0;
  //for loop
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  //if else condition...
  if (sum < 0) {
    return -1 * sum;
  } else {
    return sum;
  }
}

console.log(isAbsNumber([2, -1, 4, 8, 10]));

//getAbsSum([2, -1, 4, 8, 10])

//alternative    

function isAbsNumber(arr) {
  let sum = 0;
  //for loop
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  return Math.abs(sum);
}

console.log(isAbsNumber([-3, 4, 6, 8, -9, -6, -5]));
