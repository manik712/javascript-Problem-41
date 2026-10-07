//Write a regular expression that matches only an even number.
//Numbers will be presented as strings.

// Examples
// "2341" ➞ false
// "132" ➞ true

function jace(str) {
  let regex = /^\d*[02468]$/;
  return regex.test(regex);
}

console.log(jace("23451"));
