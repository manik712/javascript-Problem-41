//In rows, each seat is marked 1 when occupied and 0 when empty.
// Create occupiedByRow to return how many seats are occupied in each row.
// Keep the rows in their original order.

// Examples
// occupiedByRow([[1,0,1],[0,0],[1]]) // [2,0,1]
// occupiedByRow([[],[1,1],[]]) // [0,2,0]
// occupiedByRow([]) // []

function occupiedByRow(rows) {
  let arr = [];

  for (let i = 0; i < rows.length; i++) {
    let result = 0;

    for (let j = 0; j < rows[i].length; j++) {
      result += rows[i][j];
    }
    arr.push(result);
  }

  return arr;
}

console.log(occupiedByRow([[1, 1], [1]])); // [2, 1]
