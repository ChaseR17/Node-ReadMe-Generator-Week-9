// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

// Add in the badges for the different licenses
function validateContent(value) {
    if (value != "") {
        return true;
    }
    else {
        return "Please fill in question";
    }
}

const questions = [

    // title
    {
        type: "input",
        name: "title",
        message: "What is your projects title?",
        validate: validateContent,
    },
    // description
    {
        type: "input",
        name: "description",
        message: "Describe your project",
        validate: validateContent,
    },
    // installation
    {
        type: "input",
        name: "installation",
        message: "Directions on how to install?",
        validate: validateContent,
    },
    //usage
    {
        type: "input",
        name: "usage",
        message: "How to use?",
        validate: validateContent,
    },
    // pick a license

    // how to contribute
    {
        type: "input",
        name: "contribution",
        message: "How can others add to your project?",
        validate: validateContent,
    },
    // tests
    {
        type: "input",
        name: "tests",
        message: "Testing Instructions?",
        validate: validateContent,
    },
    // github name
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",
        validate: validateContent,
    },
    // email
    {
        type: "input",
        name: "email",
        message: "What is your email",
        validate: validateContent,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
