//Someone has joined your game! Create joinMessage to return their username
//followed by " has joined!". For "Nova", return "Nova has joined!".


// Examples
// joinMessage("Nova") // "Nova has joined!"
// joinMessage("Pixel_7") // "Pixel_7 has joined!"
// joinMessage("x") // "x has joined!"

function joinMessage(username) {
  return `${username} has joined!`
}
console.log(joinMessage("nova")) //nova has joined

function joinMessage(username){
  return username +  " has joined"
}
console.log(joinMessage("manik")) //manik has joined