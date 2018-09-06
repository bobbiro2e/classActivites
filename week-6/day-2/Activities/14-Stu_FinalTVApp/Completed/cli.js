// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var TV = require("./tv.js");
var tv = new TV();

var cmd = process.argv[2];
var userInput = process.argv.slice(3).join(" ");
// console.log(userInput2);

if (cmd === "show") {
    tv.findShow(userInput)
} else if (cmd === "actor") {
    tv.findActor(userInput)
} else {
    console.log("\nplease input either (show) or (actor)\n")
}

