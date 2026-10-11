//The starter returns the first limit titles. 
// The optional skipEmpty argument is not used yet. 
// Extend previewTitles so skipEmpty set to true skips empty strings before choosing the first limit titles. 
// Keep the original behavior when it is false or left out. Keep the titles in their original order.


// Examples
// previewTitles(["","A","B"], 2) // ["","A"]
// previewTitles(["","A","","B","C"], 2, true) // ["A","B"]
// previewTitles([" ","","C"], 3, true) // [" ","C"]



function previewTitles(titles, limit, skipEmpty = false) {
  if (skipEmpty) {
    titles = titles.filter((title) => title !== "");
  }

  return titles.slice(0, limit);
}

console.log(previewTitles(["","A","B"], 2,true))//[ 'A', 'B' ]