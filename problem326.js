//Show how far a task has progressed using a ten-slot text bar.
//Create progressBar to return a string containing filled slots ("#") followed by empty slots ("-").
//Each filled slot represents a complete 10% of percent; a partly filled slot stays empty.

//Examples
//progressBar(40) // "####------"
//progressBar(0) // "----------"
//progressBar(100) // "##########"

function progressBar(percent) {
  if (percent === 0) {
    return "----------";
  } else if (percent === 10 || percent === 100) {
    return "##########";
  } else if (percent > 0 && percent < 100) {
    let digit = percent.toString().split("").map(Number);
    return "#".repeat(digit[0]) + "-".repeat(10 - digit[0]);
  }
}
console.log(progressBar(6));

//alternative

function progressBar(percent) {
  if (percent === 0) {
    return "----------";
  } else {
    let digit = Math.floor(percent / 10);
    return "#".repeat(digit) + "-".repeat(10 - digit);
  }
}

console.log(progressBar(9));   // ----------
console.log(progressBar(10));  // #---------
console.log(progressBar(49));  // ####------
console.log(progressBar(100)); // ##########
