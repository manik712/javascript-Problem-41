//Create a function that takes a number as an argument and returns
//true or false depending on whether the number is symmetrical or not.
//A number is symmetrical when it is the same as its reverse.

// Examples
// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true

// Notes

function isSymmetrical(num) {
  
  let str = num.toString().split("");
  let str1 = [];
//for loop..
  for (let i = str.length; i >= 0; i--) {
    str1.push(str[i]);
  }

  let joinString = str1.join("");
  let number = Number(joinString);
  if (num === number) {
    return true;
  } else {
    return false;
  }
}

console.log(isSymmetrical(1221));//true
console.log(isSymmetrical(1232));//false

