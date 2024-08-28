// Example 1: For Loop
/* ***************** */
// print 1 to 10
const total = 10;
for (let i = 1; i <= total; i++) {
  console.log(i);
}

const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //print out each element for arr
}

// Example 2: For Each Loop
/* ********************* */
var names = ["Rob", "Van", "Dam"];

// index parameter is optional
names.forEach((person, index) => {
  console.log(index + 1 + ": " + person);
});

// Example 3: Do While Loop (execute first, check for the condition later)
/* ******************************************************************** */
let i = 1;

do{               // start executing codeblock first
  console.log(i); // print out the count up number
  i++             // incrementer
}while(i<10);     // check the condition thereafter

// Example 4: While Loop (Check the condition first before printing the code block)
/* ******************************************************************** */
let countDown = 10;

while (countDown >= 1)  // check the condition first executing codeblock within
{
    console.log ("Counting down: " + countDown);  //
    if(countDown === 1){
      console.log("Happy New Year!");
    }
    countDown--;        // notice we are using a decrementer to end the loop by its condition
}

// Scaffold for JS Assessment Parts
/* **************************** */

// 1. Game elements/assets
const prompt = require("prompt-sync")({ sigint: true });

const GRASS = "░";
const HOLE = "O";
const CARROT = "^";
const PLAYER = "*";

const rows = 8;                                            // the game map will have 8 rows
const cols = 5;                                            // the game map will have 5 cols
const field = [];                                          // create an instace of the field

for (let i = 0; i < rows; i++) {                           // create my 8 rows for the map
  field[i] = []; // initialise each row with a new array   // for each row
  for (let j = 0; j < cols; j++) {                         // create 5 cols per row
    field[i][j] = Math.random() > 0.2 ? GRASS : HOLE;      // randomise between grass(80%) and hole(20%) per column
  }
}

field[0][0] = PLAYER;                                      // add the player to the start of field
console.log(field);                                        // print the field for the player
// implement the challenge                                 // Challenge: add the carrot to the field, ensure that carrot does not take the player's position

// 2. Set up the game play
let input = "";
let gamePlay = true;

function updateGame(input){

  const userInput = String(input).toLowerCase();
  
  /*   
    if the user arrives at the carrot
    end the game - set gamePlay = false;
    inform the user that he WON the game 
  */

  /* 
    if the user arrives at the hole
    end the game - set the gamePlay = false;
    inform the user that he LOST the game
  */

  /*  
    if the user exits out of the field
    end the game - set the gamePlay = false;
    inform the user that he LOST the game
  */

  /* 
    otherwise, move the user to the new location: field[rowindex][colindex] = CARROT;
    and update the field display to show the user had moved to the new location 
  */
}

while (input.toLowerCase() !== "q") {
  console.log("(u)p, (d)own, (l)eft, (r)ight, (q)uit");
  input = prompt("Which way?");
  switch (input.toLowerCase()) {
    case "u":
      console.log("up");
      updateGame(input);
      break;
    case "d":
      console.log("down");
      updateGame(input);
      break;
    case "l":
      console.log("left");
      updateGame(input);
      break;
    case "r":
      console.log("right");
      updateGame(input);
      break;
    case "q":
      break;
    default:
      console.log("invalid input");
  }
}

console.log("Thank you. You quit the game.");
