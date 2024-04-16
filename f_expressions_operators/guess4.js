const ans = 10;
const ansString = "ten";

const feedbackGuess = "Guess the number.";
const feedbackCorrect = "You are correct!!";
const feedbackQuit = " (Press q or Q to quit)";
const feedbackEmpty = "Your answer is empty. Please try again." + feedbackQuit; 
const feedbackTooHigh = "Your answer is too high! Try again."; + feedbackQuit;
const feedbackTooLow = "Your answer is too low! Try again." + feedbackQuit;
const feedbackWrong =  "Wrong answer. Guess again." + feedbackQuit;

// Additional references: converting if-else chain to switch case statements
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than

let userInput = prompt(feedbackGuess + feedbackQuit);

while(userInput.toUpperCase() !== "Q"){ // as long as the user doesn't enter 'q' AND 'Q', run the loop
    
    let correctAns = false;
    let userFeedback = "";

    switch (true) {

        case (userInput == ans):
            userFeedback = feedbackCorrect;
            correctAns = true;
            break;   

        case (userInput.toLowerCase() == ansString):
            userFeedback = feedbackCorrect;
            correctAns = true;
            break;

        case (!userInput):
            userFeedback = feedbackEmpty;
            correctAns = false;   
            break;  

        case (userInput > ans):
            userFeedback = feedbackTooHigh;
            correctAns = false;
            break;

        case (userInput < ans):
            userFeedback = feedbackTooLow;
            correctAns = false;
            break;
        
        default:
            userFeedback = feedbackWrong;
            console.log("from default " + typeof userInput);
            correctAns = false;
            break;
    }

    if(correctAns){
        alert(userFeedback);
        break;
    }
    else{
        userInput = prompt(userFeedback);
    }

}
