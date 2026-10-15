//What is at the top of your loot bag? 
//Create firstLoot to return the first item in the loot array.
//Return its name, not the whole array.


// Examples
// firstLoot(["Potion","Gold","Ruby"]) // "Potion"
// firstLoot(["Map"]) // "Map"
// firstLoot(["Shield","Sword"]) // "Shield"


function firstLoot(loot) {
  for(let i = 0 ; i<=loot.length - 1 ; i++){
    return loot[0]
  }
}
console.log(firstLoot(["Potion","Gold","Ruby"]))
