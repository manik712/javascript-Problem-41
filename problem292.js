//Create a function that takes a string and changes the word amazing to not amazing.
//Return the string without any change if the word edabit is part of the string.

// Examples
// amazingEdabit("edabit is amazing.") ➞ "edabit is amazing."
// amazingEdabit("Mubashir is amazing.") ➞ "Mubashir is not amazing."
// amazingEdabit("Infinity is amazing.") ➞ "Infinity is not amazing.
function amazingEdabit(str) {
  // Check if the string contains "edabit" (case-insensitive)
  if (str.match(/edabit/i)) {
    return str;
  } else {
    return str.replace(/amazing/i, "not amazing");
  }
}
// Test cases
console.log(amazingEdabit("edabit is amazing.")); // ➞ "edabit is amazing."
console.log(amazingEdabit("Mubashir is amazing.")); // ➞ "Mubashir is not amazing."
console.log(amazingEdabit("Infinity is amazing.")); // ➞ "Infinity is not amazing."
