//Convert an integer from 0 through 1023 to a binary string with no leading zeroes. Return "0" for zero.

// Examples
// binary(1) ➞ "1"
// // 1*1 = 1

// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5

// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10
function binary(decimal) {
	if(decimal===0) return 0
  if(decimal>0) return decimal.toString(2)
}
console.log(binary(10))

