//Return true if the input string contains exactly five digits
//and no other characters. Otherwise, return false.

// Examples
// isValid("59001") ➞ true
// isValid("853a7") ➞ false
// isValid("732 32") ➞ false
// isValid("393939") ➞ false

function isValid(zip) {
  let regex = /^\d{5}$/;
  let result = regex.test(zip);
  return result;
}
console.log(isValid("39300b")); //false




function isValid(zip) {
  let result = zip.match(/^\d{5}$/);

  return result !== null;
}

console.log(isValid("39308")); // true
