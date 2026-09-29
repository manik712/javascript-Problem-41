//

function sorts(str) {
  let array1 = String(str).split("");

  let sortsArray = array1.sort((a, b) => b - a);

}
console.log(sorts(1234648));//8644321
