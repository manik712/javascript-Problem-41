//Create a function that takes a sentence and turns every "i" into "wi"
//  and "e" into "we", and add "owo" at the end.

// Examples
// owofied("I'm gonna ride 'til I can't no more")
// ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

function owofied(sentence) {
  let result = sentence.replaceAll("i", "wi").replaceAll("e", "we");

  return `${result} owo.`;
}

console.log(owofied("this is my love"));
