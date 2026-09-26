//Create a function that takes a string and returns a new string with all vowels removed.

// Examples

// removeVowels("I have never seen a thin person drinking Diet Coke.") ➞ " hv nvr sn thn prsn drnkng

function removeVowels(str) {
  let x = str.replace(/[e,a,i,o,u]/g, "");

  return x;
}

console.log(removeVowels("book i my love"));

