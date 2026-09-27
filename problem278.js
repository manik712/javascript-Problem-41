//Create a function that takes a number as an argument and returns
//an array containing all integers from 1 up to that number.

function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

console.log(printArray(9)); //[1,2,3,4,5,6,7,8,9]
