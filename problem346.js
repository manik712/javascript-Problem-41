//Make a simple text avatar for a Discord display name.
//Create avatarInitials to return the first letter of every word in name, joined together in uppercase. 
//Extra spaces before, after or between words should not add initials.


//Examples
//avatarInitials("  ada   lovelace  ") // "AL"
//avatarInitials("Grace Brewster Murray Hopper") // "GBMH"
//avatarInitials("Linus") // "L"

function avatarInitials(name){
   return name.match(/\b\w/g).join('').toUpperCase();
}
console.log(avatarInitials("Grace Brewster Murray Hopper"))