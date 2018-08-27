// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "please create username",
            name: "username"
        },
        {
            type: "password",
            message: "please create a password.",
            name: "password"
        },
        {
            type: "list",
            message: "plese choose an artist.",
            choices: ["arctic monkeys", "kanye west", "interpol"],
            name: "artist"
        },
        {
            type: "checkbox",
            message: "please choose a genre",
            choices: ["pop", "rap", "rnb"],
            name: "genre"
        }, {
            type: "confirm",
            message: "are you sure about your choices?",
            dafault: true,
            name: "confirm"
        }
    ])
    .then(function (inquirerResponse) {
        console.log(inquirerResponse)
        if (inquirerResponse.confirm === true) {
            console.log("\nHey " + inquirerResponse.username + ", " + inquirerResponse.artist + " is cool!")
            console.log("\nAll types of music are awesome. Specifically, " + inquirerResponse.genre)
        }
    });