//Create a function that returns the number of decimal places in a number given as a string.
//Any zeros after the decimal point should also be counted.

function getDecimalPlaces(num) {
  let x = num.match(/\.(\d+)/);

  if (x) {
    return x[1].length;
  }

  return 0;
}

console.log(getDecimalPlaces("20.456")); // 3
console.log(getDecimalPlaces("20.0")); // 1
console.log(getDecimalPlaces("20")); // 0
