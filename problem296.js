//Create a function that returns the selected filename from a path. 
//Include the extension in your answer.

// Examples
// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"
// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"
// getFilename("ffprobe.exe") ➞ "ffprobe.exe"

function getFilename(path) {
  let filename = path.split("/").pop();
  return filename;
}
console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt")); // Output: "edabit.txt"
