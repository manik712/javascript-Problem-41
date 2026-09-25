//Create a function that takes an array of numbers and returns
//a new array, sorted in ascending order (smallest to biggest).

function sortNumsAscending(arr) {
  if (arr === null || arr === undefined || arr == []) {
    return [];
  } else {
    //sort function ....
    let sortArray = arr.sort((a, b) => a - b);

    return sortArray;
  }
}

console.log(sortNumsAscending(undefined)); //[ 1, 2, 5, 10, 50 ]

!undefined; // true
!null; // true
!false; // true
!0; // true
!""; // true
