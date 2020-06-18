const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const fileAsync = util.promisify(fs.writeFile);

function userInput(){
return inquirer.prompt([
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
  ]);
}
inqP = userInput();
inqP.then(function(info){
    let readMe =`
    
    project title ${'\n'+'\n'+info.title}

    table of contents 

        instalation
        usage
        contributors
        questions


    project description ${'\n'+'\n'+info.description}

    project contributors ${'\n'+'\n'+info.contributing} 

    git hub user name ${'\n'+'\n'+info.userName}

    group emails ${'\n'+'\n'+info.email}

    questions for the project${'\n'+'\n'+info.questions} `;


    let writeP = fileAsync("README.md", readMe);
    writeP.then(()=>{
        console.log("succesfull!");
    }).catch(function(err){
        console.log("error");
        console.log(err);
    }).catch(function(err){
        console.log("error");
        console.log(err);
    })
});