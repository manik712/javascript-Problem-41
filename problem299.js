//Count the uppercase letters, lowercase letters, decimal digits, and all other characters in a string. Return those four counts in that order.

// Examples
// filterString("*$(#Mu12bas43hiR%@*!") ➞ [2, 6, 4, 8]
// // 2 uppercase letters
// // 6 lowercase letters
// // 4 numbers
// // 8 special characters

// filterString("^^Edabit^^%$#12379") ➞ [1, 5, 5, 7]

function filterString(txt) {
  let upper = txt.match(/[A-Z]/g).length;
  let lower = txt.match(/[a-z]/g).length;
  let numbers = txt.match(/[0-9]/).length;
  let specialCharacters = txt.match(/[^a-z A-Z 0-9]/g).length;
  return [upper, lower, numbers, specialCharacters];
}
console.log(filterString("**Airforce1**"));
