/*
! Full Documentation on Mozilla's web site on Working with String Object and its methods and properties
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// 1. Trim a string (observe using trimStart and trimEnd too)
let wordWithTrim = "   FSD   ";
console.log(`"${wordWithTrim.trim()}"`);


// 2. toString (converts a number to a string)
let statusCode = 404;
console.log(statusCode.toString());                         // equivalent to Number(statusCode).toString(); where we use Number Object's built-in toString() method
console.log(String(statusCode).toString());                 // one can also explicitly use the String object's toString() method to render the value to a string


// 3. toString (converts a boolean to a string, printing either "true" or "false")
let booleanStatus = true;
console.log(String(booleanStatus).toString());


// 4. Split a string based on the character used as a delimiter
let fullName3 = "John Doe";
let splitName = fullName3.split(" ");
console.log(`Welcome ${splitName[1]} to our web site!`);    // extract the 1st element from splitName ("Doe")


// 5. Split a string based on the character used as a delimiter, and limit the number of elements returned (in the 2nd argument)
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);


// 6. Split the string based on today's date and render a custom message
const currDate = Date.now();
const today = new Date(currDate);
let splitToday = today.toDateString();                  // Output: Fri, Aug, 30, 2024
splitToday = splitToday.split(" ", 1);                              
console.log(splitToday[0]);                             // Output: Fri

let msg = "";
switch(splitToday[0]){
    case "Mon":
        msg = "Monday Blues.";
        break;
    case "Fri":
        msg = "TGIF!!";
        break;
    case "Sun":
        msg = "Every day is Sunday."
        break;
    default:
        break;
}
console.log(msg);                                       // Output: "TGIF!!"


// 7. Slicing a String (when working with String Object methods, each character is treated as an array element)
let sentence2 = "Hello World";                          // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];
let slicedResult = sentence2.slice(0, 5);               // slicing based on start index (0) and end index (5-1)
console.log(slicedResult);                              // Output: Hello

let vowels = "aeiou";                                   // ['a', 'e', 'i', 'o', 'u']
let slicedVowels = vowels.slice(2);                     // using a single +ve value, refer to the number of characters to remove
console.log(slicedVowels);                              // Output: last 3 characters (i, o, u)

let vowels2 = "aeiou";                                  // ['a', 'e', 'i', 'o', 'u']
let slicedVowels2 = vowels.slice(-2);                   // using a single -ve value, refer to the number of characters returned from the back
console.log(slicedVowels2);                             // Output: last 2 characters


// 8. Concatenation
let firstName = "Martin";
let lastName = "Leong";

let fullName = firstName.concat(" ", lastName);         // the value return does not affect the variable firstName and lastName
console.log(fullName);  

// Arithmetic + operater to concatenate a string
let fullName2 = firstName + " " + lastName;             // this is undesirable, because variable 1st name should not contain the last name 
console.log(fullName2);     


// 9. Substring (extracing parts of a string)
let language = "JavaScript";
let substr = language.substring(0, 4);                  // start of index (0), end of index (4-1)
console.log(substr);                                    // Output: Java

let language2 = "Java";
let substr2 = language2.substring(1);                   // extracts all starting from index position 1
console.log(substr2);                                   // Output: ava
