// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "location?",
      name: "userInput"
    }
  ])
  .then(function (location) {
    geocoder.geocode(location.userInput, function (err, data) {
      console.log(JSON.stringify(data, null, 2));
    });
  })
  .catch(function (error) {
    console.log(error);
  });
