'use strict';   // enable strict mode is to ensure the code written is more secure and less prone to errors and "unsafe" actions.

const express = require("express");

// Constants
const PORT = 8989;
const HOST = "127.0.0.1";
const OS = require("os");                                           // console.log(OS.platform()); // e.g., 'darwin'
const ENV = "DEV";                                                  // determines the mode of development - e.g. below

// Application where we have enpoints that users can look for
const app = express();  // invoke the express library through instantiating it as a variable called app

app.get("/", (req, res)=>{                                           // listens for http://localhost:8989/ to be called
    res.statusCode = 200;                                            // return a response.ok
    const msg = "Hello FSD Learner! Running Node.js";                // create a message to be returned
    res.send(msg);                                                   // send the message to the user
});

app.get("/test", (req, res)=>{                                      // listens for http://localhost:8989/test to be called
    res.statusCode = 200                                            // returns a response.ok                                            
    const msg = "Hello from /test Node.js!";                        // create a message to be returned
    res.send(msg);                                                  // send the message to the user
});              

app.listen(PORT, HOST);
// console.log("Running on PORT:" + PORT + " and HOST:" + HOST);    // conventional way to concatenate strings
console.log(`Runs on http://${HOST}:${PORT}`);                      // using template strings to concatenate strings
console.log(OS.platform());

/* 
Example on the use of a constant to manage the deployment environment that an app is run in.
In the example below, ENV variable is used to determine the exact database to use whilst in development.
Note: Other possible values include: "PROD", "UAT"

const ENV = "DEV";

const config = {
  databaseConfig: {
    host: ENV === "DEV" ? "localhost" : "prod-db-host",
    user: ENV === "DEV" ? "dev_user" : "prod_user",
    password: ENV === "DEV" ? "dev_password" : "prod_password",
    database: ENV === "DEV" ? "dev_database" : "prod_database"
  },
  logLevel: ENV === "DEV" ? "debug" : "error"
};
*/
