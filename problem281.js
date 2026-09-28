//Create a function that takes a number and returns
//its digits sorted in descending order.

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


