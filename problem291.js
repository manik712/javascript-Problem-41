//Create a function that returns the number of syllables in a simple string.
// The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// Examples
// countSyllables("Hehehehehehe") ➞ 6

// countSyllables("bobobobobobobobo") ➞ 8

// countSyllables("NANANA") ➞ 3

function countSyllables(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 2) {
    count++;
  }
  return count;
}
console.log(countSyllables("Hehehehehehe")); // ➞ 6
console.log(countSyllables("bobobobobobobobo")); // ➞ 8
console.log(countSyllables("NANANA")); // ➞ 3