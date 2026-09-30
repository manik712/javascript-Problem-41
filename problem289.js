//Create an array containing every integer from 1 through the given number.
//Multiply each multiple of 4 by 10, and leave every other value unchanged.

function amplify(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 4 !== 0) {
      arr.push(i);
    } else if (i % 4 === 0) {
      arr.push(i * 10);
    }
  }
  return arr;
}

console.log(amplify(25))
console.log(amplify(10))//






//[
//    1,  2,  3,  40,  5,  6,  7,  80,
//    9, 10, 11, 120, 13, 14, 15, 160,
//   17, 18, 19, 200, 21, 22, 23, 240,
//   25
// ]


// //[
//   1, 2,  3, 40,  5,
//   6, 7, 80,  9, 10
// ]