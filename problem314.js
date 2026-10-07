//Write a function that transforms all letters from [a, m]
//to 0 and letters from [n, z] to 1 in a string.

// Examples
// convertBinary("house") ➞ "01110"
// convertBinary("excLAIM") ➞ "0100000"
// convertBinary("moon") ➞ "0111"

function convertBinary(str) {
  let arr = str.split("");
  let result = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= "a" && arr[i] <= "m") {
      result += "0";
    }
    if (arr[i] >= "n" && arr[i] <= "z") {
      result += "1";
    }
  }
  return result;
}

console.log(convertBinary("moon")); //0111
