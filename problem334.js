//Find the next bus you can catch from today's timetable.
//Create nextBus to return the earliest time in departures that is at or after now.
//A bus leaving exactly now counts. If there are no buses left today, return "none".

// Examples
// nextBus(["08:00","08:15","08:30"], "08:10") // "08:15"
// nextBus(["08:00","08:15"], "08:15") // "08:15"
// nextBus(["08:00","08:15"], "08:16") // "none"

function nextBus(departures, now) {
  let result = departures.find((element) => element >= now);
  let x = result === undefined ? "none" : result;
  return x;
}

console.log(nextBus(["08:00", "08:15", "08:30"], "08:5"));
