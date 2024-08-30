const prompt = require("prompt-sync")({ sigint: true });

// Game elements/assets constants
const GRASS = "░";
const HOLE = "O";
const CARROT = "^";
const PLAYER = "*";

// WIN / LOSE / OUT / QUIT messages constants
const WIN = "";                                                                 // TODO: customise message when player wins
const LOST = "";                                                                // TODO: customise message when player lose
const OUT = "";                                                                 // TODO: customise message when player is out of bounds (lose)
const QUIT = "Game Ended."                                                      // TODO: customise message when player quits

class Field{

    // TODO: create the constructor

    static welcomeMsg(msg){                                                     // static Method to show game's welcome message
        // TODO:
    }

    static generateField(rows, cols, percentage) {   
        // TODO:
    }

    printField(){                                                               // print the game field (used to update during gameplay)       
        // TODO:
    }

    updateGame(input){                                                          // TODO: Refer to details in the method's codeblock

      const userInput = String(input).toLowerCase();
    
        /*   
        TODO: if the user arrives at the carrot
        end the game - set gamePlay = false;
        inform the user that he WIN the game 
        */

        /* 
        TODO: if the user arrives at the hole
        end the game - set the gamePlay = false;
        inform the user that he LOST the game
        */

        /*  
        TODO: if the user exits out of the field
        end the game - set the gamePlay = false;
        inform the user that he step OUT of the game
        */

        /*  
        TODO: if the user ends the game
        end the game - set the gamePlay = false;
        inform the user that he QUIT the game
        */


        /* 
        TODO: otherwise, move player on the map: field[rowindex][colindex] = CARROT;
        update the display to show the user had moved to the new area on map
        ask for player's next move as well 
        */
    }

    startGame(){                                                                
        // TODO:
    }

    endGame(){                                                                  
        this.gamePlay = false;                                                  // set property gamePlay to false
        process.exit();
    }

    quitGame(){
        console.log(QUIT);
        this.endGame();
    }

}

const rows = 8;                                                                 // the game map will have 8 rows
const cols = 5;                                                                 // the game map will have 5 cols
const percentage = .2;                                                          // % of holes for the map

// Instantiate a new instance of Field Class
const createField = Field.generateField(rows, cols, percentage);
const gameField = new Field(createField);

Field.welcomeMsg("Welcome to Find Your Hat!\n**************************************************\\n");

gameField.startGame();
gameField.printField();                                                         // to test only