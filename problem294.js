//Write the regular expression that reveals the hidden message.
//You have to remove all of the numbers to
//reveal the message. Use the character class \D in your expression.

function revealMessage(str) {
  let sentence = str.replace(/[0-9]/g, "");
  return sentence;
}

console.log(revealMessage("242Edabit23 45can344 3be3 254324addictive!")); // Output: "Hello World!"
