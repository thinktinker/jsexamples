/* Example 1: Declare an array */
/* *************************** */
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray);

const myArray2 = new Array(1, 2, 3, 4, "Hello", true, null);
console.log(myArray2);

/* Example 2: Built-in functions of the Array Object */
/* ************************************************* */

// Map function
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyBy10 = mappedArray.map((item) => item * 10);

console.log(multiplyBy10);
console.log(mappedArray);

/* Conventionally, before ES5 or ES6 was rolled out (using for loop) */
/* ***************************************************************** */
const multplyBy10_v2 = new Array();

for (let index = 0; index < mappedArray.length; index++) {
  multplyBy10_v2[index] = mappedArray[index] * 10;
}

console.log(multplyBy10_v2);

// Filter function 1
const arr1 = [1, 2, 3, 4, 5, 6];
const filtered = arr1.filter((item) => item === 2 || item === 4);
console.log(filtered);

// Filter function 1.1 (breaking down the arrow function)
const arr2 = [1, 2, 3, 4, 5, 6];
const filtered2 = arr1.filter((item) => {
  return item === 3 || item === 6;
});
console.log(filtered2);

// Filter function 2
const vowels = ["a", "e", "i", "o"];
const filteredVowels = vowels.filter((vowel) => vowel == "a" || vowel == "u");
console.log(filteredVowels); // ["a"]

// Sort function
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// sort by descending order
const descendNums = nums.sort((a, b) => (a > b ? -1 : 1));
console.log(descendNums);

// sort numbers by ascending order
const randomNums = [7, 21, 3, 14, 5, 60];
const ascendingNums = randomNums.sort((a, b) => (a > b ? 1 : -1));
console.log(ascendingNums);

// sorting strings in ascending order
const ascendingNames = names.sort((a, b) => (a > b ? 1 : -1));
console.log(ascendingNames);

// reduce function (only returns a single value of the product)
const numbers = [1, 2, 3, 4];
var product_of_arr = numbers.reduce((a, b) => a * b);
console.log(product_of_arr);

// Example 3. 2D Array
/* **************** */
const array2D = [
  [3, 2, 7],        // index 0 of array2D
  [2, 9, 5],        // index 1 of array2D
  [5, 1, 5]         // index 2 of array2D       
];

console.log(array2D);

// accessing elements of a 2D Array
const element = array2D[1][1];
console.log("Element selected: ", element);

// Create a 2D array of game tiles
const myField = [
  ['░', '░', 'O', '░'],
  ['*', 'O', '░', 'O'],
  ['░', '^', '░', '░'],
];

console.log(myField);

// Using a for loop to create a 2D array with initial values of 0s
// constant arr2D is filled with 0s across all rows
const rows = 3;
const cols = 3;
const arr2D = [];

for (let i = 0; i < rows; i++) {
  arr2D[i] = [];      // Does this line create each row (or index) of the 2d array (yes / no)?

  for (let j = 0; j < cols; j++) {
    arr2D[i][j] = 0; // Initialize with 0 or any other value (you can amend this to populate with random tiles)
  }
}

console.log(arr2D);
