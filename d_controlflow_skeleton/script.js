
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
function ftnSalutation(){
    return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
}

/* 
  ftnSalutation written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user) => {
    var msg = "Hi, " + salutation + " " + user + "! We received your submssion.";
    return msg; 
}

// Refactor the if conditions, use comparison operators to form a single if statement
function validateInputs(choice, name = ""){

  //  if the choice is empty OR the name is empty, return to the caller prematurely
  if(choice == "" || name=="")
    return;

  return true;

}

// TODO: Use a function where a switch statement is used for the following
// None:    "Thank you. No preference selected."
// Chicken: "The main course served is Chicken Cordon Bleu."
// Beef:    "The main course served is Beef Wellington." 
// Others:  "We will contact you separately to arrange."
function ftnRadioMeal(meal){

  // TODO: using switch statement to provide the appropriate feedback to the user
  
}