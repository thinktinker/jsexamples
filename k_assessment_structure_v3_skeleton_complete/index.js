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
const QUIT = "Thank you. You quit the game";                                    // TODO: customise message when player quits

// MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 8;                                                                 // the game map will have 8 rows
const COLS = 5;                                                                 // the game map will have 5 cols
const PERCENT = .2;                                                             // % of holes for the map

class Field{

    // create the constructor
    constructor(field = [[]]){
        this.field = field;                                                     // this.field is a property of the class Field 
        this.gamePlay = false;                                                  // when the game is instantiated, the gamePlay is false
    }

    static welcomeMsg(msg){                                                     // static Method to show game's welcome message
        console.log(msg);
    }

    static generateField(rows, cols, percentage) {                              // static method that generates and return a 2D map   
        const map = [[]];

        for (let i = 0; i < rows; i++) {                                        // create the map with 8 rows
            map[i] = [];                                                        // each row will have 5 cols
            for (let j = 0; j < cols; j++) {
                map[i][j] = Math.random() > percentage ? GRASS : HOLE;          // per col in each row, we generate grass(80%)/hole(20%)
            }
        }

        return map;
    }

    printField(){                                                               // print the game field (used to update during gameplay)       
        this.field.forEach(element => {
            console.log(element.join(""));
        });
    }

    updateGame(input){                                                          // TODO: Refer to details in the method's codeblock

      const userInput = String(input).toLowerCase();
        
        /*   
        TODO: 1. if the user arrives at the carrot
        end the game - set gamePlay = false;
        inform the user that he WIN the game 
        */

        /* 
        TODO: 2. if the user arrives at the hole
        end the game - set the gamePlay = false;
        inform the user that he LOST the game
        */

        /*  
        TODO: 3. if the user exits out of the field
        end the game - set the gamePlay = false;
        inform the user that he step OUT of the game
        */

        /*  
        4. if the user ends the game
        end the game - set the gamePlay = false;
        inform the user that he QUIT the game
        */
        if(userInput === "q"){
            this.quitGame();
        }

        /* 
        TODO: 5. otherwise, move player on the map: this.field[rowindex][colindex] = PLAYER;
        update this.field to show the user had moved to the new area on map
        */
    }

    plantCarrot(){
        // TODO: plant the carrot by randomizing the X and Y location in the form of variables
        const X = Math.floor(Math.random() * (ROWS - 1)) + 1;
        const Y = Math.floor(Math.random() * (COLS - 1)) + 1;   
        this.field[X][Y] = CARROT;
        console.log(X, Y);
    }

    startGame(){                                                                
        this.gamePlay = true;                                                   // set this.gamePlay = true to keep the game running

        this.field[0][0] = PLAYER;                                              // at the start of the game, we insert the player;

        this.plantCarrot();                                                     // plant the carrot manually, or use a Method

        while(this.gamePlay){                                                   // while the gamePlay is happening                                          

            this.printField();                                                  // show the map each time a move is requested

            let flagInvalid = false;                                            // flag to check if any invalid input is entered
            console.log("(u)p, (d)own, (l)eft, (r)ight, (q)uit");               // provide instruction for player to move
            const input = prompt("Which way: ");                                // obtain the user's direction (up, down, left right, quit)

            switch (input.toLowerCase()) {                                      // acknowledging the user's input
                case "u":
                    console.log("up");
                    break;
                case "d":
                    console.log("down");
                    break;
                case "l":
                    console.log("left");
                    break;
                case "r":
                    console.log("right");
                    break;
                case "q":
                    console.log("quit");
                    break;
                default:
                    console.log("Invalid input");
                    flagInvalid = !flagInvalid;
                    break;
            }

            if(!flagInvalid){                                                   // only if flagInvalid is false, then update game
                this.updateGame(input);
            }

        }

    }

    endGame(){                                                                  
        this.gamePlay = false;                                                  // set property gamePlay to false
        process.exit();                                                         // end the Node app
    }

    quitGame(){
        console.log(QUIT);
        this.endGame();
    }

}

// Instantiate a new instance of Field Class
const createField = Field.generateField(ROWS, COLS, PERCENT);                   // call Field's class static method to generate 2D field                
const gameField = new Field(createField);

Field.welcomeMsg("Welcome to Find Your Hat!\n**************************************************\\n");

gameField.startGame();