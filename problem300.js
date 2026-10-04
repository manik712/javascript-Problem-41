//Using the .test() method in your function, return whether a string contains the
//characters "a" and "c" (in that order) with any number of characters (including zero) between them.

// Examples
// asterisk("account") ➞ true
// asterisk("abccount") ➞ true
// asterisk("abbbccount") ➞ true
// asterisk("bbbccount") ➞ false

function asterisk(sentence) {
  let x = /^(?=.*a)(?=.*c)/i;
  let y = x.test(sentence);
  return y;
}

console.log(asterisk("match"));
