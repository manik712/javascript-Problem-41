//Create a function that returns the index of the first vowel in a string.

// Examples
// firstVowel("apple") ➞ 0
// firstVowel("hello") ➞ 1

function firstVowel(str) {
  //string to array..
  let arr = [...str];
  //for loop...
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].match(/[a,e,i,o,u]/gi)) {
      return `index no. ${i}`;
    }
  }
}
//print the result...
console.log(firstVowel("nudnik")); //index no. 1




