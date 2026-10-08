//Complete the three functions for bitwise AND, OR, and XOR.
// Each function takes two decimal integers and returns its result as an ordinary decimal integer.

// Examples

// bitwiseAND(7, 12) ➞ 4
// bitwiseOR(7, 12) ➞ 15
// bitwiseXOR(7, 12) ➞ 11
function bitwiseAND(n1, n2) {
  let bit = n1 & n2;

  return bit;
}
console.log(bitwiseAND(7, 12));


function bitwiseOR(n1, n2) {
  let bit = n1 | n2;

  return bit;
}
console.log(bitwiseOR(7, 12));

function bitwiseXOR(n1, n2) {
  let bit = n1 ^ n2;

  return bit;
}
console.log(bitwiseXOR(7, 12));
