//Create a function that takes in an array of
// numbers and returns the sum of its cubes.

function sumOfCubes(arrN) {
  let sum = 0;
  if (arrN.length === 0) {
    return 0;
  } else {
    for (let i = 0; i <= arrN.length - 1; i++) {
      let cube = arrN[i] * arrN[i] * arrN[i];
      sum += cube;
      //sum = sum+cube
    }
  }
  return sum;
}
console.log(sumOfCubes([1, 2, 3, 4, 5]));
