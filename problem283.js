//Given a name and an indicator that is either 0 or 1, return "Hello [Name]" for 1 and "Bye [Name]" for 0. Include one space and uppercase the first character of the name.

//Examples

//sayHelloBye("alon", 1) ➞ "Hello Alon"
//sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

function sayHelloBye(name, num) {
  if (num === 1) {
    return `Hello ${name}`;
  }
  if (num === 0) {
    return `Bye ${name}`;
  }
}
console.log(sayHelloBye("manik", 1));
