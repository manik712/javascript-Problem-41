//Create a function that takes an array of numbers and returns
//a new array, sorted in ascending order (smallest to biggest).

function sortNumsAscending(arr) {
	//sort function ....
  let sortArray = arr.sort((a, b) => a - b);
  return sortArray;
}

console.log(sortNumsAscending([1, 2, 10, 50, 5]));//[ 1, 2, 5, 10, 50 ]
