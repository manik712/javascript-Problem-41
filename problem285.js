//

function sorts(str) {
  let array1 = String(str).split("");

  let sortsArray = array1.sort((a, b) => b - a);

  let joinElements = sortsArray.join("");
  let number = Number(joinElements);
  return number;
}
console.log(sorts(1234648)); //8644321
console.log(sorts(12344563656)); //66655443321
console.log(sorts(12345345435)); //55544433321



