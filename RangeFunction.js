/**
 * Assignment: YDKJSY Appendix B, Practicing Closure
 * 
 * Problem description: The {(range(..))} function takes a number as its first argument, representing the first number 
 * in a desired range of numbers. The second argument is also a number representing the end of the desired range (inclusive). 
 * If the second argument is omitted, then another function should be returned that expects that argument.
 * 
 * @param {number} start - First entry of the progression row
 * @param {number} end - Last element of the progression row
 * @return {number} - {(number[]|function)} - In case if both start and end are provided return an array with arithmetical progression
 * In case if only start is provided - returns a function that expects the end value and generates the array
 * 
 */
function range(start, end) {
  let resultArr = [];
// Check if the end parameter is not provided; return a function that expects the end value
  if (typeof end === "undefined") {
    resultArr.push(start);
    return function start(end) {
      return range(resultArr[0], end);
    };
  }
// If both start and end are provided, generate the range array
  else {
    for (let i = start; i <= end; i++) {
      resultArr.push(i);
    }
    
// Return the generated array
    return resultArr;
  }
}

//Example usage
range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

start4(6); // [4,5,6]
