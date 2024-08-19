/**
 * Assignment: YDKJSY Appendix B, Practicing Comparisons
 *
 * Problem description: scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting
 * duration (number of minutes). It should return true if the meeting falls entirely within the work day (according to the
 * times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.
 *
 * @param {string} startTime - The start time of the meeting in hh:mm format.
 * @param {number} durationMinutes - The duration of the meeting in minutes.
 * @throws Will throw an error if the start time is not in the correct format
 *
 */

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  //Validate the hh:mm format input
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  let isValidTime = (time) => {
    time = time.padStart(5, "0");
    let check = regex.test(time);
    return check ? null : new Error("Invalid Date/Time, use hh:mm format!");
  };

  //Convert the hh:mm to universal minutes from midnight
  let universalTime = (timeString) => {
    [hour, minute] = timeString.split(":").map(Number);
    return parseInt(hour * 60 + minute);
  };

  //Call the validation function and throw an exception if it contains Error
  let validationError = isValidTime(startTime);
  if (validationError) {
    throw validationError;
  }

  //Check if the meeting falls within the working hours
  if (
    universalTime(startTime) < universalTime(dayStart) ||
    universalTime(startTime) + durationMinutes > universalTime(dayEnd)
  ) {
    return false;
  } else {
    return true;
  }
}
try {
  scheduleMeeting("7:00", 15); // false
  scheduleMeeting("07:15", 30); // false
  scheduleMeeting("7:30", 30); // true
  scheduleMeeting("11:30", 60); // true
  scheduleMeeting("17:00", 45); // true
  scheduleMeeting("17:30", 30); // false
  scheduleMeeting("18:00", 15); // false
} catch (err) {
  console.error(err.message);
}
