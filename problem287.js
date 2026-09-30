//A recursive function calls itself. It needs a base case that stops the calls.

// Create a recursive function that returns the factorial of a
// positive integer. For example, 4! = 4 × 3 × 2 × 1 = 24.

// Examples
// factorial(5) ➞ 120 factorial(3) ➞ 6

function factorial(num) {
  let result = 1;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
  }
  return result;
}
console.log(factorial(5)); // 120
