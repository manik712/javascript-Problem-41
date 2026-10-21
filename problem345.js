//Your game needs a message for the player.
//Create gameMessage to return "Keep playing" when health is above 0. Otherwise, return "Game over".

// Examples
// gameMessage(0) // "Game over"
// gameMessage(25) // "Keep playing"
// gameMessage(-5) // "Game over"
function gameMessage(health) {
  if (health > 0) return "Keep playing";
  if (health <= 0) return "Game over";
}
console.log(gameMessage(-5));
