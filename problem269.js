//Highest Digit

// Create a function
// that takes a number as an argument and
//returns the highest digit in that number.

function highestDigit(num) {
  let splitNumber = num.toString().split("");

  let max = -Infinity;
  for (let i = 0; i <= splitNumber.length - 1; i++) {
    let number = Number(splitNumber[i]);
    //console.log(typeof(number))
    if (number > max) {
      max = number;
    }
  }
  return max;
}

console.log(highestDigit(45649));
