console.log("hello world");
var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the the title of your projct?",
      name: "title"
    },
    {
        type: "input",
        message: "give a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "what is your table of contents",
        name: "table of contents"
      },
      {
        type: "input",
        message: "instalation?",
        name: "instalation"
      },
      {
        type: "input",
        message: "usage?",
        name: "usage"
      },
      {
        type: "input",
        message: "contributors?",
        name: "contributing"
      },
      {
        type: "input",
        message: "test?",
        name: "test"
      },
      {
        type: "input",
        message: "Any questions for your project?",
        name: "questions"
      },
  ]);