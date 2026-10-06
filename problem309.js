//Create a function that takes a string and returns
//a new string with all vowels removed.

function removeVowels(str) {
	return str.replace(/[aeiou]/gi, "")
}
console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))
