// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your project:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing to your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for running tests:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (for questions and contact):'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file has been successfully generated!');
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const readmeContent = generateMarkdown(data);
        writeToFile('generatedREADME.md', readmeContent);
    });
}

// Function call to initialize app
init();
