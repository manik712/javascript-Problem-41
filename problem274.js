//Create a function that finds the word "bomb" in the given string 
//(not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".


// Examples
// bomb("There is a bomb.") ➞ "Duck!!!"

// bomb("This goes boom!!!") ➞ "There is no bomb, relax."

function bomb(str){
   let findBomb = str.match(/bomb/gi)  ? "Duck!!!" : "There is no bomb, relax";
   return findBomb;

}
console.log(bomb("There is a B omb.")) //Duck!!!
console.log(bomb("This goes boom!!!")) //There is no bomb, relax