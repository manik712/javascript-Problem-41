//A book has pages numbered from 1 through total, but exactly one page is missing.
// Create missingPage to return its number.
// The pages array contains every remaining page number, in any order.

// Examples

// missingPage([1,2,4,5], 5) // 3
// missingPage([3,1], 3) // 2
// missingPage([], 1) // 1

function missingPage(pages, total) {
  let sum = 0;

  for (let i = 1; i <= total; i++) {
    sum += i;
  }

  for (let i = 0; i < pages.length; i++) {
    sum -= pages[i];
  }

  return sum;
}

console.log(missingPage([1, 2, 4, 5], 5)); // 3
console.log(missingPage([3, 1], 3));       // 2
console.log(missingPage([], 1));           // 1
