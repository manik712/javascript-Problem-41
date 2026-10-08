//You are checking your Apple devices before heading out.
// For this challenge, a device needs charging when its battery is below 20%.
// Create needsCharging to return the names of those devices, in their original order.
//  Each entry in devices is a pair: [name, battery].

// Examples

// needsCharging([["iPhone",15],["MacBook",80],["iPad",19]]) // ["iPhone","iPad"]
// needsCharging([["iPhone",20],["iPad",0]]) // ["iPad"]
// needsCharging([]) // []

function needsCharging(arr) {
  let arr1 = [];
  for (let i = 0; i <= arr.length - 1; i++)
    if (arr[i][1] < 20) {
      arr1.push(arr[i][0]);
    }

  return arr1;
}

console.log(
  needsCharging([
    ["iPhone", 15],
    ["MacBook", 80],
    ["iPad", 19],
  ]),
);//[ 'iPhone', 'iPad' ]