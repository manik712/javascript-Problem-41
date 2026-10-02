//Create a function based on the input and output. Look at the examples, there is a pattern.

// Examples
// secret("div*2") ➞ "<div></div><div></div>"
// secret("p*1") ➞ "<p></p>"
// secret("li*3") ➞ "<li></li><li></li><li></li>"

function secret(str){
  let [tag ,count] = str.split('*');
  let result = '';
  for(let i =0 ;i<count ;i++){
    result +=`<${tag}></${tag}>`;
  }
  return result;
}

console.log(secret("div*2")); // Output: