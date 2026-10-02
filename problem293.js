//Create a function that counts how many D's are in a sentence.

// Examples

// countDs("My friend Dylan got distracted in school.") ➞ 4
// countDs("Debris was scattered all over the yard.") ➞ 3
// countDs("The rodents hibernated in their den.") ➞ 3
function countDs(sentence) {
  // Use a regular expression to match all occurrences of 'd' or 'D' in the sentence
  let result = sentence.match(/d/gi);
  // Return the length of the result array, or 0 if there are no matches
  return result ? result.length : 0;
}

console.log(countDs("My friend Dylan got distracted in school.")); // ➞ 4
console.log(countDs("Debris was scattered all over the yard.")); // ➞ 3
console.log(countDs("manik loves ice cream.")); // ➞ 0