const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            throw "err";
            console.log("err");
        }
        console.log("Success");
      })
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {
        const markdown = generateMarkdown(userInput);
        writeToFile("readme.md", markdown(response));
    });

}

// function call to initialize program
init();


