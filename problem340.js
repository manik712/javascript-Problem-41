//Silence, please! Create mutedVolume to return 0 when muted is true. 
//When muted is false, return the supplied volume unchanged.


//Examples
//mutedVolume(80, true) // 0
//mutedVolume(35, false) // 35
//mutedVolume(0, false) // 0


function mutedVolume(volume, muted) {
  if(muted===true) return 0
  if(muted===false)return volume
}
console.log(mutedVolume(80, true))