//Create a function that takes a string and returns
//the number (count) of vowels contained within it.

// Examples
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4

// Notes
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.

function countVowels(str) {
  //console.log(str)
  //console.log(typeof(str))
  let x = new RegExp(/[a,e,i,o,u]/g);
  //console.log(x)
  let vowels = str.match(x);
  // console.log(vowels)
  return vowels ? vowels.length : 0;
}
console.log(countVowels("apple"));//2
