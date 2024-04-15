let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.");

while(userInput.toUpperCase() !== "Q"){ // as long as the user doesn't enter 'q' AND 'Q', run the loop
    
    if(userInput == ans || userInput.toLocaleLowerCase() == "ten" ){ // if user's answer is a number 10 OR string literal "ten"
        
        alert("You are correct!!");
        break;
        
    }else if(!userInput){ // else if the user's input is undefined == false (!false == true)
        
        userInput = prompt("Your answer is empty. Please try again."); 
        
    }
    else{
        
        userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.");
        
    }
}
