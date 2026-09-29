//Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of
//those numbers formatted as a phone number (e.g. (555) 555-5555).

// Examples

// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890" 
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468" 


function formatPhoneNumber(arr) {
	let phoneNumber =
 `"(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}"
 
 
 `
 return phoneNumber;
}
console.log(formatPhoneNumber([1,2,3,7,8,9,3,4,5,0]))//"(123) 789-3450"