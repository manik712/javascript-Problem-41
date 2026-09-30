//Create a function that takes a string (a random name).
//If the last character of the name is an "n", return true, otherwise return false.

//Examples
//isLastCharacterN("Aden") ➞ true

//isLastCharacterN("Piet") ➞ false

function isLastCharacterN(word) {
  let lastChar = word.match(/n$/i);
  if (lastChar) {
    return true;
  } else {
    return false;
  }
}
console.log(isLastCharacterN("Piet")); //false
console.log(isLastCharacterN("Aden")); //true
