//Write a regular expression and assign it to x.
//It should match a string that contains at least one digit.

// Examples
// "c8" ➞ true
// "23cc4" ➞ true
// "abwekz" ➞ false
// "sdfkxi" ➞ false
function containC(str) {
  let rex = /[0-9]/g;
  let result = rex.test(str);
  return result;
}
console.log(containC("abwekz"));
