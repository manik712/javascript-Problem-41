//Given a string of letters, how many capital letters are there?

// Examples
// capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6

// capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14
function capitalLetters(str) {
  return str.match(/[A-Z]/g).length;
}

console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc"));
