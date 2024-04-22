const prompt = require("prompt-sync")({ sigint: true });
const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

// Set constants to ask for the user's input for the no. of tiles for the game
const _WIDTHPROMPT = "Enter the no. of tiles for the WIDTH (min. 5 - max. 100): ";
const _HEIGHTPROMPT = "Enter the no. of tiles for the HEIGHT (min. 5 - max. 100): ";
const _INVALID = "Please enter a number between 5 - 100.\n";

// TODO: Set the constants to display _WIN, _LOSE or _OUTOFBOUNDS
// const _OUTOFBOUNDS = "";
// const _WIN = "";
// const _LOSE = "";

class Field{

    // 6. Constructor initialisation. Note: the field created for the game is based on a 2d-array
    constructor(field = new Array([])) {
        this.playGame = false // Set the game play to false
        // TODO: Set the field passed in
        // TODO: Set player's initial position x:0
        // TODO: Set player's initial position y:0
        // TODO: Show pathCharacter at initial position
    }

    // 7. Start the game
    startGame() {
        
        this.playGame = true;
        
        // Print the instruction
        this.printInstruction();
        
        while (this.playGame) {
            
            // Print Maze
            // TODO: Print maze

            // Prompt player to move
            // TODO: Prompt the player to move

            // Track the player's position and end the game if value returned is _WIN, _LOSE or _OUTOFBOUNDS
            // TODO: track the player's position

            // Show pathCharacter at current position
            this.field[this.positionY][this.positionX] = pathCharacter;
        }
    }

    // 8. Print instruction
    printInstruction() {
        console.log('To move the character, enter:\n> "u" to move up\n> "d" to move down\n> "r" to move right\n> "l" to move left\n> "q" or CTRL + C to quit.\n')
    }

    // 9. Print current state of field
    printMaze() {
        // Going through and console.log each element
        // TODO: concatenate the field generated into a string
        // for (const iterator of object) {
            
        // }
    }

    // 10. // Check if user has gone off-bounds, fallen into the hole or found the hat
    trackPlayer() {

        let status = "";

        // TODO: Set the condition to check if user has gone off-bounds, fallen into the hole or found the hat
        // switch (true) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }

        return status;
    }

    // 11. Prompt the user to make the next move
    promptMove() {
        var moveDirection = prompt("Which way? ");
        moveDirection = moveDirection.toLowerCase();    // Convert player's input to lowercase before checking
        
        // TODO: Move base on input for moveDirection (inform the player if it is an invaid move or the game has ended via "q")
        // switch (key) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }
    }

    // 12. End the game with the message passed in
    endGame(msg=""){
        // TODO: End the game with the message passed in
    }

    // 1. Set the game Width and Height
    static gameDimensions() {
        const width = this.setDimensions(_WIDTHPROMPT);
        const height = this.setDimensions(_HEIGHTPROMPT);

        return {width, height};
    }

    // 2. Check if user enters a valid width AND height
    static setDimensions(prompter=""){

        let dimensionStatus = false;
        let dimension = 0;

        while (!dimensionStatus) {
            dimension = prompt(prompter); 
            if(isNaN(dimension) || dimension < 5 || dimension > 100){
                console.log(_INVALID);
            }else{
                this.printDimension(prompter, dimension);
                dimensionStatus = true;
            }
        }

        return dimension;
    }

    // 3. Create the message(s) for the set Width OR Height
    static printDimension(prompter, dimension){
        prompter == _WIDTHPROMPT ? console.log(`Width Set: ${dimension} \n`) :  console.log(`Height Set: ${dimension} \n`);
    }

    // 4. Create the game's 2D field 
    static createField(width, height) {
        
        // Create field (a 2d-array) by the width and height passed in
        // TODO: Create the 2d-array field by the width and height passed in
    }
}

// Clear the screen
console.clear();
// Print a welcome message and prompt player to set the tiles for the maze
console.log("Welcome to Find Your Hat Maze!\n**************************************************\\n");

// Set the tiles
const gameDimensions = Field.gameDimensions();

// Create the 2d-array of the game's field using gameDimension's width and height
const createdField = Field.createField(Number(gameDimensions.width), Number(gameDimensions.height));

// Instantiate gameField as the instance of Field class AND call startGame() to begin
const gameField = new Field(createdField);
gameField.startGame();