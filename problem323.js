//A loot chest needs a certain number of keys. 
// Create canOpenChest to return true if keys is at least needed, and false if you do not have enough.

// Examples
// canOpenChest(3, 2) // true
// canOpenChest(2, 2) // true
// canOpenChest(1, 2) // false


function canOpenChest(keys, needed) {
  if (keys > needed) {
    return true;
  } else if (keys === needed) {
    return true;
  } else {
    return false;
  }
}
console.log(canOpenChest(3, 2))//true

//alternative

function canOpenChest(keys, needed) {
  return keys >= needed

}

console.log(canOpenChest(1, 2))//false