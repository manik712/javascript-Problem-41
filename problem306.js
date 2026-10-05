//Create a function that replaces all the vowels in a string with a specified character.

//Examples
// replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"
// replaceVowels("minnie mouse", "?") ➞ "m?nn?? m??s?"

function replaceVowels(str, ch) {
  return str.replace(/[aeiou]/g, `${ch}`);
}

console.log(replaceVowels("i love my son", "~"));
