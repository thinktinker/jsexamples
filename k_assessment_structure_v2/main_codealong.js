const prompt = require("prompt-sync")({ sigint: true });
const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

// Set constants to ask the player for inputs on the number of tiles for the game (width and height)
const _MIN = 5, _MAX = 100;
const _WIDTHPROMPT = `Enter the no. of tiles for the WIDTH (min. ${_MIN} - max. ${_MAX}): `;
const _HEIGHTPROMPT = `Enter the no. of tiles for the HEIGHT (min. ${_MIN} - max. ${_MAX}): `;
const _INVALID = `Please enter a valid number between ${_MIN} - ${_MAX}.\n`;

class Field{
    // 5. Constructor initialisation. Note: the field created for the game is a 2d-arry
    constructor(field = new Array([])){
        this.playGame = false;              // Set the game play to false
        this.field = field;                 // Set the field that was passed in
        this.positionX = 0;                 // Set player's initial position x: 0;
        this.positionY = 0;                 // Set player's initial position y: 0;
        this.field[0][0] = pathCharacter;   // Set the path of the Character's initial x and y position
    } 

    // 6. Start the game
    startGame(){
        this.playGame = true;   // Eventually, this will be used to stop the game

        // Print the game instructions
        this.printInstructions();

        while(this.playGame){
            // TODO: Print Maze

            // TODO: Prompt the player to move

            // TODO: Track the player's position

            // Show pathCharacter at its current position
            this.field[this.positionY][this.positionX] = pathCharacter;
        }
        
    }

    // 7. Print the game instructions
    printInstructions(){
        console.log('To move the character, enter:\n> "u" to move up\n> "d" to move down\n> "r" to move right\n> "l" to move left\n> "q" or CTRL + C to quit.\n')
    }

    // 8. Print maze
    printMaze(){
        // Going through and console.log each element
        // TODO: concatenate the field generated into a string
        // for (const iterator of object) {
            
        // }
    }

    // 9. Prompt the player to make the next move
    promptMove(){
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

    // 10. Check if player has gone off-bounds, fallen into a hole or found the hat
    trackPlayer(){

        let status = ""

        // TODO: Setting the condition to check if the player has gone off-bounds, fallen into a hole or found the hat
        // switch (true) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }

        return status;
    }

    // 11. End the game with a message passed in
    endGame(msg){
        // TODO: End the game using the message passed in
        this.playGame = false;
        console.log(msg);
        //Use a process code to exit the program
    }

    // 1. Set the game width and height (Static Method)
    static gameDimensions(){
        const width = this.setDimensions(_WIDTHPROMPT);
        const height = this.setDimensions(_HEIGHTPROMPT);

        return {width, height};
    }

    // 2. Check if the player enters a valid width and height
    static setDimensions(prompter){

        let dimensionStatus = false;
        let dimension = 0;
        
        while(!dimensionStatus){
            dimension = prompt(prompter);
            if(isNaN(dimension) || dimension < _MIN || dimension > _MAX){   //Comparing the values from constants _MIN and _MAX
                console.log(_INVALID);
            }else{
                this.printDimension(prompt, dimension)
                dimensionStatus = true;
            }
        }

        return dimension;
    }

    // 3. Create a message for the width OR height set
    static printDimension(prompter, dimension){
        prompter === _WIDTHPROMPT ? console.log(`Width set: ${dimension} \n`) : console.log(`Height set: ${dimension} \n`);
    }

    // 4. Creating the game's 2D field
    static createField(width, height){

        // Create field (a 2d-array), by the height and the width passed in
        const field = new Array(height).fill("").map(element => new Array(width));

        // Create a random number between 0.1 to 0.2, keep the values at 1 decimal place
        let limit = Math.round((Math.random() * 0.1 + 0.1) * 10) / 10;
        
        // For each unit in y (column)
        for (let y = 0; y < height; y++) {
            // For each unit in x (row), setting up the tiles
            for (let x = 0; x < width; x++) {
                
                // Generate a random value between 0.1 to 1
                const ceiling = Math.round(Math.random() * 10) / 10;
                
                // If the limit is less than the ceiling, fill with the fieldCharacter - otherwise, fill with the hole
                field[y][x] = limit < ceiling ? fieldCharacter : hole;
            }
        }

        return field;
    }
}

// Clear the screen
console.clear();

// Print a welcome message and prompt the player to set up the tiles for the maze
console.log("Welcome to Find Your Hat Maze!\n**************************************\n");

// Setting the tiles for the game
const gameDimensions = Field.gameDimensions();

// Create a 2d-array of the game's field usng gameDimensions' width and height
const createField = Field.createField(Number(gameDimensions.width), Number(gameDimensions.height));

// Instantiate gameField as the instance of Field class AND call its startGame() method to begin the game
const gameField = new Field(createField);
gameField.startGame();