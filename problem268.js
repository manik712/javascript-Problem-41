//Given an array of numbers, return an array which
// contains all the even numbers in the original
// array, which also have even indices.

// Examples
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
//  getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]
//  getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

// Notes
// Arrays start at index 0.

function getOnlyEvens(arr) {
  let evenarray = [];
  //for loop 
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      evenarray.push(arr[i]);
    }
  }
  //return the new array..
  return evenarray;
}

console.log(getOnlyEvens([4, 8, 7, 4, 2, 1]));//[ 4, 8, 4, 2 ]

