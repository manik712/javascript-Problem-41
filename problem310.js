//Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

// Examples
// "red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "pink flag red flag black flag blue flag green flag red flag".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
function manik(str) {
  let regex = str.match(/red flag|blue flag/g);
  return regex;
}
console.log(manik("yellow flag red flag blue flag green flag"));
