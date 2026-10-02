//A strong Scottish accent makes every vowel similar to an "e", 
// so you should replace every vowel with an "e". Additionally, 
// it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.

// Examples
// toScottishScreaming("hello world") ➞ "HELLE WERLD"
// toScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"
// toScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEEETEFEL!

function toScottishScreaming(str){
 let scottishScreaming = str.replace(/[aeiou]/gi, 'E');
 return scottishScreaming.toUpperCase();
}
console.log(toScottishScreaming("hello world")); // Output: "HELLE WERLD"