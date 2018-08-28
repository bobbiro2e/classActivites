var inquirer = require("inquirer");

var coinflip = Math.floor(1 + Math.random() * 2)
var playerArray = [];
var playerCount = 0;
var gameCount = 0;
var offenseNumber;
var defenseNumber;
var randomRoll1 = Math.floor(1 + Math.random() * 20)
var randomRoll2 = Math.floor(1 + Math.random() * 20)

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        if (coinflip === 1) {
            offense += 5
        }
    };
    this.badGame = function () {
        if (coinflip === 2) {
            defense -= 5
        }
    };
};

Player.prototype.printStats = function () {
    console.log(JSON.stringify(this));
};


var createPlayer = function () {
    if (playerCount < 3) {
        console.log("NEW PLAYER INFO")
        inquirer.prompt([
            {
                type: "input",
                message: "What is your player's name?",
                name: "name"
            },
            {
                type: "list",
                message: "What is this player's position?",
                choices: ["starter", "starter", "sub"],
                name: "position"
            },
            {
                type: "input",
                message: "How well does this player play offense? [1-10]",
                name: "offense"
            },
            {
                type: "input",
                message: "How well does this player play defense? [1-10]",
                name: "defense"
            }
        ])
            .then(function (answers) {
                var newPlayer = new Player(
                    answers.name,
                    answers.position,
                    answers.offense,
                    answers.defense
                )

                playerArray.push(newPlayer);
                playerCount++;
                createPlayer();

            });
    } else {
        for (var i = 0; i < playerArray.length; i++) {
            playerArray[i].printStats();

            // playGame(playerArray);

        }
    }
};

createPlayer();


function playGame(playerArray) {
    if (gameCount < 5) {
        if (playerArray[i].position === "starter") {
            console.log("working")
        }
    }
};

