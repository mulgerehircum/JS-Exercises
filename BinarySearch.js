/**
 * Assignment: Grokking Algorithms: An Illustrated Guide for Programmers, Binary Search algorithm
 *
 * Problem description: Build a binary search function that accepts an array and a searched value and returns the index of it in the array,
 * or null if there are no elements with the searched value.
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number|null}
 */
const selectionSort = require('./SelectionSort');
function binarySearch(array, value) {
selectionSort(array, 'asc'); //
  //Define low and high of an array
  let low = 0;
  let high = array.length -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); //Round down the calculation of mid
    let guess = array[mid]; //Make a guess using mid as an index
    if (guess == value) {
      return mid; //If guess is correct - return index
    }
    if (guess < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null; //If while is exited without found value - return null
}

//Example cases
const array1 = [5, 3, 8, 1, 9, 0, 2];
const array2 = [-3, 14, -7, 0, 8, -2];
const array3 = [50, 40, 30, 20, 10];
const array4 = [2.5, 1.1, 3.7, 0.8, 2.2];
const array5 = [42];
const array6 = [7, 7, 7, 7, 7];

// Perform binary search on the arrays
console.log(binarySearch(array1, 5)); // Expected: 4 
console.log(binarySearch(array2, 0)); // Expected: 3 
console.log(binarySearch(array3, 30)); // Expected: 2 
console.log(binarySearch(array4, 2.5)); // Expected: 3 
console.log(binarySearch(array5, 42)); // Expected: 0 (single element)
console.log(binarySearch(array6, 7)); // Expected: 0 or 1 or 2 or 3 or 4 (any one index is correct)
