console.log("hello world");
var inquirer = require("inquirer");
var fs = require('fs');
const { info } = require("console");

inquirer.prompt([
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
        name: "TOC"
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
  ]).then(info => {
    console.log(JSON.stringify(info,null,''));
    });