// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray)

// An array SHOULD be used with values of a single data type
const myArray2 = ["James", "Sam", "Xavier"];

// A) ARRAY PROPERTIES
console.log("Number of elements in mappedArray: " + myArray2.length)

// B) ARRAY METHODS

// i - map function of an array
const mappedArray = [1, 2, 3, 4, 5, 6];
const mulitplyArrBy10 = mappedArray.map(item => item * 10);
console.log(mulitplyArrBy10); // [10, 20, 30, 40, 50, 60]

// Callback function #2 as an arrow function in its full form:
const mulitplyArrBy20 = mappedArray.map((item)=>{return item * 20;});
console.log(mulitplyArrBy20); // [20, 40, 60, 80, 100, 120]

// Callback function #3 as a conventional function:
const mulitplyArrBy30 = mappedArray.map(function(item){ return item * 30; });
console.log(mulitplyArrBy30); // [30, 60, 90, 120, 150, 180]

// Callback function #4, using a dedicated function within the arrow function:
function mulitplyBy40(a){
    return a * 40;
}
const arrMultiplyBy40 = mappedArray.map(item => mulitplyBy40(item));
console.log(arrMultiplyBy40); // [40, 80, 120, 160, 200, 240]

// ii - filter function of an array
const vowels = ["a", "e", "i", "o"];
const filteredVowels = vowels.filter(vowel=> vowel == "a" || vowel == "u");
console.log(filteredVowels); // ["a"]

// iii - sort function of an array
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
const descendNums = nums.sort((a, b) => a > b ? -1 : 1 );
console.log(descendNums); // [6, 5, 4, 3, 2, 1]

// Sort by ascending order
const ascendingNames = names.sort((a, b) => a > b ? 1 : -1 );
console.log(ascendingNames); // ['Chris', 'James', 'Lenon', 'Max']

// iv - reduce function of an array
const numbers = new Array(1, 2, 3, 4); 

const productOfNum = numbers.reduce((a, b)=> a * b);
console.log(productOfNum);  // 24

// another approach of applying a reuduce function of an array
function product(a, b){ 
  return a * b; 
} 
const arr = new Array(1, 2, 3, 0); 

const result = arr.reduce(product) 
console.log(result) // What is the end result? Answer: 0

// v - manipulating data on an existing array

// push() a value to the end of an array
const teamList = ["Tanna", "Shia Lyn", "Zhi Yan", "Francis"];
teamList.push("Muhaimin");  
console.log("Team 1: " + teamList);

// const extractedMembers = teamList.splice(0, 2); // remove a value starting from index and ends before index
// console.log(extractedMembers); // ["Tanna", "Shia Lyn"]
// console.log(teamList);  // ["Zhi Yan", "Francis", "Muhaimin"]

// splice() data
const index = 1;
const newTeamList = [...teamList.splice(0, index), "Colin", ...teamList]; // ["Tanna", "Shia Lyan", "Colin", "Zhi Yan", "Francis", "Muhaimin"]
console.log(newTeamList);

// reverse() the elements of an array
console.log(newTeamList.reverse());


// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
let countdown = 0;

// You can modify a for loop to count in a reverse order
for (let index = 10; index >= countdown; index--) {

  // using a ternary operation to replace if-else conditions
  // if condition met ? execute statement : else execute another statement
  (index > countdown) ? console.log(index) : console.log("Happy New Year!");
}


// ii - for-each loop
const tickerSymbols = ["FB", "AAPL", "AMZN", "NFLX", "GOOG"];
tickerSymbols.forEach(ticker => console.log(ticker));

const productListing = [{name: "Jordan 3", price: "$100"}, {name: "Nike Dunks", price: "$150"}];
productListing.forEach(item => console.log(item));

// iii - do-while loop (execute first, check for the condition later)

// -- Uncomment the code below to test -- 
// let getName = "";

// do{ // start executing first
//     getName = prompt("Please enter your name:");
    
//     if(getName !== "")
//         document.getElementById("displayName").textContent = getName;

// } while(getName == ""); // check later


// iv - while loop (check the conditions first before running the while loop)
// a similar approach to the above example, but using a while loop instead

// -- Uncomment the code below to test -- 
// let getName2 = "";

// while(getName2 == ""){ // check first, before executing
//     getName2 = prompt("Please enter your name:");

//     if(getName2 !== "")
//         document.getElementById("displayName").textContent = getName2;
// }

// another example of a while loop
// print 1 to 10
let countUp = 1;

while (countUp <= 10)
{
    console.log ("Counting up: " + countUp);
    countUp++;
}