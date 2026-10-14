//The starter below has a bug. Fix rowTotal. 
//Return the sum of all the numbers in all the rows, 
//not just one row. Return 0 when there are no numbers.

// Examples
// rowTotal([[2,3],[7]]) // 12

// rowTotal([[2],[]]) // 2

// rowTotal([]) // 0



function rowTotal(rows) {
  let totals = 0;
  for (const row of rows) {
   let total = 0;
    for (const number of row){
      total += number;}
    totals +=total
  }
  
  return totals;
}
//print the result 
console.log(rowTotal([[2],[]]))//2