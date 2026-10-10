//Create a function that takes a number (step) as an argument and returns the number 
// of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Examples
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

function matchHouses(step) {
	if (step===0){
    return 0
  }else if (step<0){
    return "input positive number"
  }else{
    return step*5+1
  }
}

console.log(matchHouses(1))


//alternative

function matchHouses(step) {
	return step === 0 ? 0 : 5 * step + 1;
}