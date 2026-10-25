//The supplied splitValues(numbers, threshold) function already 
//returns two arrays: values below threshold,
//followed by values greater than or equal to it. Each side keeps the input order.

//Add an optional third argument, equalLeft, which defaults to false. 
//When it is true, place values equal to the threshold in the first array instead of the second. 
//Values below and above the threshold should stay on their original sides.

// Examples
splitValues([3, 1, 2, 2, 4], 2)  // [[1], [3, 2, 2, 4]]
splitValues([3, 1, 2, 2, 4], 2, true)  // [[1, 2, 2], [3, 4]]
splitValues([2, 2], 2, true)  // [[2, 2], []]


function splitValues(numbers, threshold, equalLeft = false) {
  let left = [];
  let right = [];

  for (let num of numbers) {
    if (num < threshold || (equalLeft && num === threshold)) {
      left.push(num);
    } else {
      right.push(num);
    }
  }

  return [left, right];
}

console.log(splitValues([3, 1, 2, 2, 4], 2));
// [[1], [3, 2, 2, 4]]

console.log(splitValues([3, 1, 2, 2, 4], 2, true));
// [[1, 2, 2], [3, 4]]

console.log(splitValues([2, 2], 2, true));
// [[2, 2], []]