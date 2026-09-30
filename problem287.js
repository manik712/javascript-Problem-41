//A recursive function calls itself. It needs a base case that stops the calls.

// Create a recursive function that returns the factorial of a
// positive integer. For example, 4! = 4 × 3 × 2 × 1 = 24.

// Examples
// factorial(5) ➞ 120 factorial(3) ➞ 6

function factorial(num) {
  let result = 1;
  //if the number is 0 or 1, return 1. Otherwise, multiply the number by the factorial of the number minus 1.
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
  }
  //return the result of the factorial calculation
  return result;
}
//test the function with the example provided
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
