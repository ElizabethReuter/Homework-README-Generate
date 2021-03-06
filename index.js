const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your GitHub Repo link?",
        name: "link",
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "License:",
        name: "license",
    },
    {
        type: "input",
        message: "Description:",
        name: "description",
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage",
    },
    {
        type: "input",
        message: "Installation:",
        name: "installation",
    },
    {
        type: "input",
        message: "Tests:",
        name: "tests",
    },
    {
        type: "input",
        message: "Questions:",
        name: "questions",
    }
 ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error) {
        if (error) {
            return "error";
            console.log(error);
        }
        console.log("Success");
      })
}

// function to initialize program
function init() {
    console.log('init function');
    inquirer.prompt(questions).then(function(response) {
        console.log(response);
        writeToFile("readme.md", markdown(response));
    });

}

// function call to initialize program
init();