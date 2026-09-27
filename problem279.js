//Create a function that takes an array of arrays with numbers.
//Return a new (single) array with the largest numbers of each.

//Examples
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function findLargestNums(arr) {
  let arr1 = arr[0];
  let arr2 = arr[1];
  let arr3 = arr[2];
  let largeNum1 = -Infinity;
  let largeNum2 = -Infinity;
  let largeNum3 = -Infinity;
  //first loop..
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] > largeNum1) {
      largeNum1 = arr1[i];
    }
  }
  //second loop..
  for (let j = 0; j <= arr2.length - 1; j++) {
    if (arr2[j] > largeNum2) {
      largeNum2 = arr2[j];
    }
  }
  //third loop...
  for (let k = 0; k <= arr3.length - 1; k++) {
    if (arr3[k] > largeNum3) {
      largeNum3 = arr3[k];
    }
  }
  //return the large number from this array...
  return [largeNum1, largeNum2, largeNum3];
}
//print the result..
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90], //[ 7, 90, 2 ]
    [1, 2, 0],
  ]),
);
