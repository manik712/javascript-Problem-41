//Given a string of what the overlapping claps sounded like, return how many claps were made in total.

// Examples

// countClaps("ClaClaClaClap!") ➞ 4
// countClaps("ClClClaClaClaClap!") ➞ 6
// countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9

function countClaps(str) {
	let clapCount = str.match(/c/gi).length;
  return clapCount;
}
console.log(countClaps("ClaClaClaClap!")); // Output: 4
console.log(countClaps("ClClClaClaClaClap!")); // Output: 6
console.log(countClaps("CCClaClClap!Clap!ClClClap!")); // Output: 9