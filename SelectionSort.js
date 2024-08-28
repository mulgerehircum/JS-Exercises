/**
 * Assignment: Grokking Algorithms: An Illustrated Guide for Programmers, Selection Sort algorithm
 *
 * Problem description: Build a selection sort algorithm that accepts an array and returns it sorted from high to low.
 *
 * @param {Array<*>} array
 * @param {*} order [order = asc] Defines sorting order, accepts 'asc' and 'desc'
 * @return {Array<*>}
 */
function selectionSort(array, order = "asc") {
  //First loop, iterates over each element of array
  for (i = 0; i < array.length; i++) {
    let curElement = i;
    // Second loop, finds the smallest element for ascending order or the largest for descending order
    for (let j = i + 1; j < array.length; j++) {
      if (
        (order == "desc" && array[j] > array[curElement]) ||
        (order == "asc" && array[j] < array[curElement])
      ) {
        curElement = j;
      }
    }
    //Swaps elements if larger or smaller elemnt is found
    if (curElement !== i) {
      [array[i], array[curElement]] = [array[curElement], array[i]];
    }
  }
  return array;
}
module.exports = selectionSort;

//Example cases
let array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
let array2 = [4.2, 3.14, 1.618, 2.718, 9.81, 1.414, 6.67, 0.577];
let array3 = ["banana", "apple", "orange", "kiwi", "grape", "mango", "pear"];
let array4 = [-10, 15, -3, 7, -1, 0, 5, -7, 3, -5];
let array5 = [
  "2024-08-26",
  "2023-01-15",
  "2023-12-31",
  "2024-05-20",
  "2022-11-01",
];

console.log(selectionSort(array1));
console.log(selectionSort(array2));
console.log(selectionSort(array3));
console.log(selectionSort(array4));
console.log(selectionSort(array5));

console.log(selectionSort(array1, "desc"));
console.log(selectionSort(array2, "desc"));
console.log(selectionSort(array3, "desc"));
console.log(selectionSort(array4, "desc"));
console.log(selectionSort(array5, "desc"));
