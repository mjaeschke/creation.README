const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const fileAsync = util.promisify(fs.writeFile);

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
        message: "Enter Your Github User Name",
        name: "userName"
      },
      {
        type: "input",
        message: "Enter Your Email",
        name: "email"
      },
      {
        type: "input",
        message: "instalation?",
        name: "instalation"
      },
      {
        type: "input",
        message: "contributors?",
        name: "contributing"
      },
      {
        type: "input",
        message: "Any questions for your project?",
        name: "questions"
      },
  ]).then(function(info){
    let readMe =
    
    `project title 
    
    ${info.title}

    table of contents 

        instalation
        usage
        contributors
        questions


    project description 
    
    ${info.description}

    Project Contributors 

    ${info.contributing} 

    Github User Name 

    ${info.userName}

    Email 

    ${info.email}

    questions for the project

    ${info.questions}`;


    let writeP = fileAsync("README.md", readMe);
    writeP.then(()=>{
        console.log("succesfull!");
    }).catch(function(err){
        console.log("error");
        console.log(err);
    })
});