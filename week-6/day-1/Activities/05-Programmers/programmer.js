var inquirer = require("inquirer");

function Programmer(name, title, age, language) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.language = language;
};

Programmer.prototype.print = function () {
    console.log(JSON.stringify(this))
};

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "list",
            message: "What is your job title?",
            choices: ["Web Developer", "Software Engineer", "Full-Stack Developer"],
            name: "title"
        },
        {
            type: "input",
            message: "How old are you?",
            name: "age"
        },
        {
            type: "input",
            message: "What is your favorite programming language?",
            name: "language"
        }
    ])
    .then(function (answers) {
        var newProgrammer = new Programmer(answers.name, answers.title, answers.age, answers.language)
        newProgrammer.print();
    });