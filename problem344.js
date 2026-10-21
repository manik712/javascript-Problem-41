//Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:
// 1. arr1's min is greater than arr2's min.
// 2. arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

function canNest(arr1, arr2) {
  return (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  );
}
//print the result ....
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([1, 4, 7], [3, 8, 5]));
