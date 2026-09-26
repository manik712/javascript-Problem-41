//Write a function that calculates the factorial of a number recursively.

function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    return undefined;
  } else {
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  }
  return result;
}
console.log(factorial(0));//1
console.log(factorial(1))//1
console.log(factorial(4))//24
console.log(factorial(-5))//undefined


//let factorial = n => n ? n * factorial(--n) : 1;