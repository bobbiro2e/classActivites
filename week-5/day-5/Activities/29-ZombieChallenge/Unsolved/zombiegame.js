// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

var inquirer = require("inquirer");

var zombieHealth = 15;
var myHealth = 70;
var zombieRoll = Math.floor(Math.random() * 11);
var damage = Math.floor(Math.random() * 6);

var game = function () {
    if (myHealth >= 0) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Save a life, Kill a Zombie. Choose a number between [1-5].",
                    name: "number"
                },
            ])
            .then(function (number) {

                if (number === zombieRoll) {
                    zombieHealth -= damage;
                    console.log("\ngot one! you took " + damage + " health points. 🔥");
                    console.log("\nzombie health: " + zombieHealth);
                } else if (number !== zombieRoll) {
                    myHealth -= damage;
                    console.log("\nzombie gotcha, you lost " + damage + " health points. 😭");
                    console.log("your health: " + myHealth + "\n");
                };
                game();
            })
    } else {
        console.log("game over...")
    }
};
game();

//not quite working...