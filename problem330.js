//Write numberInstructions to return the strings in steps with a
// step number at the start of each one. Start with 1 and add a period
// and one space after the number, like "1. Mix". Keep the steps in their original order.

// Examples
// numberInstructions(["Mix","Bake"]) // ["1. Mix","2. Bake"]
// numberInstructions(["Open the box"]) // ["1. Open the box"]
// numberInstructions([]) // []

// Notes

// steps is an array of 0 to 30 strings, each with 1 to 60 English letters,
//  digits, spaces or punctuation marks. Keep each original string unchanged
//  after its number. Repeated steps get their own consecutive numbers.
//  Return an empty array for no steps.

function numberInstructions(steps) {
  if (steps === 0) {
    return [];
  } else {
    let arr = [];
    for (let i = 0; i <= steps.length - 1; i++) {
      let x = `${i + 1}. ${steps[i]}`;
      arr.push(x);
    }
    return arr;
  }
}
console.log(numberInstructions(["manik", "sarker"])); //[ '1. manik', '2. sarker' ]
