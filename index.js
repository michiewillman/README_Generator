// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title for your README.",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please describe the installation process.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Describe the operating instructions and how your application will be used.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Enter the relative path for a screenshot of your application.",
  },
  {
    type: "select",
    name: "license",
    message: "Select the license you want to use:",
    choices: ["IBM", "ISC", "MIT", "Apache", "Mozilla"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to this application?",
  },
  {
    type: "input",
    name: "tests",
    message: "Describe any tests you have set up for this application.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub URL.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error
      ? console.log(error)
      : console.log("README.md has been generated successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
  });
}

// Function call to initialize app
init();
