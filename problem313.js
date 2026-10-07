//Return true if the input string contains exactly five digits
//and no other characters. Otherwise, return false.

// Examples
// isValid("59001") ➞ true
// isValid("853a7") ➞ false
// isValid("732 32") ➞ false
// isValid("393939") ➞ false

function isValid(zip) {
  let result = zip.match(/[0-9]/g).length;
  let zips = result == "5" ? true : false;
  return zips;
}
console.log(isValid("39300"))//true