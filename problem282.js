//A set is a collection of unique items. A set can be
//formed from an array by removing all duplicate items.

//[1, 3, 3, 5, 5, 5] // original array

function set(arr) {
  let arr1 = arr.filter((item, index) => arr.indexOf(item) === index);
  return arr1;
}

console.log(set([1, 3, 4, 7, 7, 6, 6, 8, 8, 8, 7]));
