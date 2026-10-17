//A robot starts at home and follows the moves in moves.
//Each "U", "D", "L" or "R" moves it one step up, down, left or right.
//Create robotHome to return true if it finishes back at home, or false otherwise.

// Examples
// robotHome("UURDDL") // true
// robotHome("UU") // false
// robotHome("LRUD") // true

function robotHome(moves) {
  let x = 0;
  let y = 0;

  for (let move of moves) {
    if (move === "R") x++;
    if (move === "L") x--;
    if (move === "U") y++;
    if (move === "D") y--;
  }

  return x === 0 && y === 0;
}

console.log(robotHome("LRUD")); // true
console.log(robotHome("LLRR")); // true
console.log(robotHome("UUD"));  // false
