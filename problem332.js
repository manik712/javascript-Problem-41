//An account starts with starting credits.
// Positive changes add credits; negative changes spend them.
// Create balancesAfterChanges to apply changes in order and return the balance after each change.
// Do not include the starting balance as a separate entry.

// Examples
// balancesAfterChanges(10, [5,-3,2]) // [15,12,14]
// balancesAfterChanges(2, [-5,4]) // [-3,1]
// balancesAfterChanges(10, []) // []

function balancesAfterChanges(starting, changes) {
  if (changes.length === 0) {
    return [];
  } else {
    let arr = [];
    let balance = starting;
    for (let i = 0; i <= changes.length - 1; i++) {
      balance = changes[i] + balance;
      arr.push(balance);
    }
    return arr;
  }
}
console.log(balancesAfterChanges(10, [5, -3, 2])); //[ 15, 12, 14 ]
