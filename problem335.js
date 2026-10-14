//A robot starts at home and follows the moves in moves.
//Each "U", "D", "L" or "R" moves it one step up, down, left or right.
//Create robotHome to return true if it finishes back at home, or false otherwise.

// Examples
// robotHome("UURDDL") // true
// robotHome("UU") // false
// robotHome("LRUD") // true

function robotHome(moves) {
  let rex = /[udlr]/gi;

  return moves.match(rex);
}
console.log(robotHome("UU"));

