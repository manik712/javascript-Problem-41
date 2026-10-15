//You have one available time block and one proposed meeting.
// Each is written as [start, end]. Create meetingFits to return true if the whole meeting fits inside the available block.
// Otherwise, return false. The meeting may start or end exactly at the block's boundary.

// Examples
// meetingFits([9,12], [10,11]) // true
// meetingFits([9,12], [8,10]) // false
// meetingFits([9,12], [9,12]) // true

function meetingFits(available, meeting) {
  if (available[0] <= meeting[0] && available[1] >= meeting[1]) {
    return true;
  } else {
    return false;
  }
}
console.log(meetingFits([9, 12], [8, 10]));
