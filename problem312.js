//Create a function that returns the number of hashes and pluses in a string.

//Examples
//hashPlusCount("###+") ➞ [3, 1]
//hashPlusCount("##+++#") ➞ [3, 3]
//hashPlusCount("#+++#+#++#") ➞ [4, 6]
function hashPlusCount(str) {
  let c = str.match(/\+|#/g);
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i <= c.length; i++) {
    if (c[i] === "#") {
      count1++;
    }
    if (c[i] === "+") {
      count2++;
    }
  }
  return [count1, count2];
}

console.log(hashPlusCount("#+++#+#++#"));//[ 4, 6 ]
