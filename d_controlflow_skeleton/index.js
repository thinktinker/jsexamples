// this is a package in node.js that allows you to seek user inputs from the console.
const prompt = require("prompt-sync")({ sigint: true });

// Example 1: Conditional Statements and Comparison Operaters
/* ******************************************************* */
const a = 10;
const b = 20;

console.log(a < b); // answer: true
console.log(a > b); // answer: false

let age = Number(prompt("Please enter your age: "));

if (isNaN(age)) {
  // feedback the person did not enter a correct age
  console.log("You did not enter a number");
} else {
  // nested if, else-if, else to feedback to the user
  if (age < 13) console.log("You are not of age to enter.");
  else if (age >= 13 && age < 18)
    console.log("You will need a parent to accompany you to enter.");
  else console.log("Thank you and you may enter.");
}

// Example 2: Multiple if, else-if, else statement
/* ******************************************** */
const a = 10;
const b = 20;

console.log(a <= b); // answer: true
console.log(a >= b); // answer: false

let score = Number(prompt("Enter your score: "));

if (score <= 49) {        // F is less than 50
  console.log("F");
} else if (score < 60) {  // D is 50 to 59
  console.log("D");
} else if (score < 70) {  // C is 60 to 69
  console.log("C");
} else if (score < 80) {  // B is 70 to 79
  console.log("B");
} else if (score < 90) {  // A is 80 to 89
  // A is 80 to 89
  console.log("A");
} else {
  console.log("Distinction"); // Else - Distinction
}

// Example 3: Using Switch statements
/* ****************************************** */
let score = Number(prompt("Enter your score: "));

switch (true) {
  case score <= 49:
    console.log("F");
    break;
  case score <= 60:
    console.log("D");
    break;
  case score < 70:
    console.log("C");
    break;
  case score < 80:
    console.log("B");
    break;
  case score < 90:
    console.log("A");
    break;
  default:
    console.log("Distinction");
    break;
}

// Example 3.1: Using Switch Statements
/* ****************************************** */
let grade = prompt("Enter the grade (A - F): ");

switch (grade) {
  case "F":
    console.log("Score is less than 50.");
    break;
  case "D":
    console.log("Score is between 50 to 59.");
    break;
  case "C":
    console.log("Score is between 60 to 69.");
    break;
  case "B":
    console.log("Score is between 70 to 79.");
    break;
  case "A":
    console.log("Score is between 80 to 89.");
    break;
  default:
    console.log("Distinction");
}
