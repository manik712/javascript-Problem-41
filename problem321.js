//Turn one word into a hashtag.
// Create makeHashtag to put "#" before word and return the new string. 
// Keep the word just as it is.


// Examples
// makeHashtag("coding") // "#coding"
// makeHashtag("PixelArt") // "#PixelArt"
// makeHashtag("X") // "#X"

function makeHashtag(word) {
  return `"#${word}"`
}

console.log(makeHashtag("coding"))


function makeHashtag(word) {
  return '#' + word;
}
console.log(makeHashtag("X"))