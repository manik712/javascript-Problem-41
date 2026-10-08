//Create a function that returns the lowest value from an array of readings.

function lowestReading(readings) {
  let lowest = Infinity;
  for (let reading of readings) {
    if (reading < lowest) {
      lowest = reading;
    }
  }
  return lowest;
}

console.log(lowestReading([23, 56, 12, 8, 45]));
