//You are given an array with random words but your
// program doesn't accept words that begin with the capital
// letter "C". Remove the unaccepted words and return the new array.

// Examples
// accepted(["Ducks", "Bears", "Cats"]) ➞ ["Ducks", "Bears"]
// accepted(["cars", "trucks", "planes

function accepted(arr) {
  let nArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].match(/C/g)) {
    } else {
      nArr.push(arr[i]);
    }
  }
  return nArr;
}

console.log(accepted(["man", "Cat", "nillpori", "cat"]));//[ 'man', 'nillpori', 'cat' ]
