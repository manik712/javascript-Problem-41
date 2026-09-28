//Create a function that takes any non-negative number as an argument
//and return it with its digits in descending order. Descending order
//is when you sort from highest to lowest.

//Examples
//sortDescending(123) ➞ 321

function sortDescending(num) {
  let y = [];

  let x = String(num).split("");
  for (let i = x.length; i >= 0; i--) {
    y.push(x[i]);
  }

  return y.join("");
}

console.log(sortDescending(123));


