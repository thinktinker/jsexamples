/* 1. Primitive JS Data Types */
/* ************************** */

let pi = 3.142;
console.log(typeof pi);

let strValue = "Hello"; // camel case naming convention (best practice)
console.log(typeof strValue);

let boolValue = true;
console.log(typeof boolValue);

let nullValue = null;
console.log(typeof nullValue);

let undefinedValue;
console.log(typeof undefinedValue);


/* 2. Non-primitive JS Data Types (Reference Data Types) */
/* ***************************************************** */

// 2.1. Arrays
let arr = ["a", "b", "c"]; // initialise an array with 3 elements
let faang = new Array(); // initalise an empty array

faang[0] = "FB"; // assigning a value to array element by index: 0
faang[1] = "AMZN"; // assigning a value to array element by index: 1
faang[2] = "APPL"; // assigning a value to array element by index: 2
faang[3] = "NFLX"; // assigning a value to array element by index: 3
faang[4] = "GOOG"; // assigning a value to array element by index: 4

// 2.2. Objects
let person = { name: "Sam", age: 42 }; // initialise an object with 2 key/value pairs

let vehicle = new Object(); // declare a new Object, but not initialised
vehicle.name = "Suzuki"; // assign a key/value pair for object vehicle
vehicle.model = "Swift"; // assign another key/value pair for object vehicle

let announce = function () {       // declare a new object variable as a function
  console.log("Hello JS!");
}; 
let announce2 = () => {            // declere a new object variable as an ARROW function
  console.log("Hello JS again!");
}; 

announce(); // invoke function announce() to run its statements within - printing "Hello JS!" to the console
announce2(); // invoke function announce2() to run its statement within - printing "Hello JS again!" to the console

let sumTwoValues = function (a, b) {
  // add values passed to it as arguments (2 parameters) and we need to return the results
  return a + b;
};

let subtractTwoValues = (a, b) => {
  // Arrow ftn: subtract values passed to it (2 parameters) and we need to return the results
  return a - b;
};

console.log(sumTwoValues(10, 10));     // passing in 2 arguments to function sumTwoValues
console.log(subtractTwoValues(5, 5));  // passing in 2 arguments to function subtractTwoValues


/* 3. const Variables */
/* ****************** */

const PI = 3.142;                      // a constant is immutable (cannot be altered after declaration and initialisation)
/* PI = "I don't know why?"; */        // this will invoke an error, constants cannot be changed after declaration
console.log(PI);


/* 4. let variables */
/* **************** */

function greet(){
  let greeting = "Welcome FSD04 learners!";  // this is a locally scoped variable within the function; cannot be called elsewhere
  console.log(greeting);
}

greet();
/* console.log(greeting); */                 // this will not work


/* 5. var variables */
/* **************** */

var globalMsg = "Greeting!!!";

function welcome(){
  var localMsg = "Welcome FSD learners!";
  console.log(localMsg);
  console.log(globalMsg);
}

welcome();


/* 6. var scope (Why it is best NOT to declare variables using the var keyword)  */
/* ***************************************************************************** */

var message = "Hello, Martin!";          // var message is declared here and used
console.log(message);

var message = "Hello, Martin again!";    // var message is re-declared here and used (this becomes a problem)
console.log(message);

message = "Hello, martin yet again!";    // now, based on this, which variable message is being used and re-assigned new values?
console.log(message);


/* 7. let scope */
/* ************ */

let fsdmessage = "Hello, FSD!!!";
console.log(fsdmessage);

fsdmessage = "Hello, FSD and Instructor!!!";
console.log(fsdmessage);

/* let fsdmessage = "Hello, again!!!" */             // this will not work (error)


/* 8. let scope 2 (global and local scope) */
/* *************************************** */

let globalVar = "I'm global";

function checkScope(){

    if(true){                                      // create an if block inside the function
      let blockVar = "I'm inside a block";         // blockVar is inside the if block
      console.log(blockVar);                       // blockVar is only accessible inside the if code block
    }

    /* console.log(blockVar); */                   // it is not accessible outside (local-scope applies)
    console.log(globalVar);                        // no issue accessing globalVar, because it is declared outside, ie. at a global level
}

checkScope();
