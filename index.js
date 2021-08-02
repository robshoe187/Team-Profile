const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const fs = require('fs');
let template = [];

promptsManager = [
    {
        name: 'name',
        message: 'What is the managers name?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'What is the employees id?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is the employees email address?',
        type: 'input'
    },

    {
        name: 'officeNumber',
        message: 'What is the employee office number?',
        type: 'input'
    }
];
promptsEngineer = [
    {
        name: 'name',
        message: 'What is the employees name?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'What is the employees id?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is the employees email address?',
        type: 'input'
    },
    
    {
        name: 'github',
        message: 'What is the employee github account name?',
        type: 'input'
    },
];
promptsIntern = [
    {
        name: 'name',
        message: 'What is the employees name?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'What is the employees id?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is the employees email address?',
        type: 'input'
    },
    {
    name:'school',
    message: 'What is the name of the employees school?',
    type: 'input',
    }
];
promptsMenu = [
    {
    name: 'choice',
    message: 'Which would you like to create next?',
    type: 'list',
    choices:['Engineer','Intern','None of the above']
    }
];

const managerPrompt = () => {
    inquirer.prompt(promptsManager).then(function(answer) {
        manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        
    const managerTemplate = `<div class="card">
        <div class="container">
          <h4><b>${manager.name}</b></h4>
          <p>Manager</p>
          <ul>
            <li>ID# ${manager.id}</li>
            <li><a>${manager.email}</a></li>
            <li>Office Number: ${manager.officeNumber}</li>
          </ul>
        </div>
      </div>`
    template.push(managerTemplate);
    menuPrompt();
    });
}

const engineerPrompt= () => {
    inquirer.prompt(promptsEngineer).then(function(answer) {
        engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        const engineerTemplate = `<div class="card">
        <div class="container">
          <h4><b>${engineer.name}</b></h4>
          <p>Engineer</p>
          <ul>
            <li>ID# ${engineer.id}</li>
            <li><a>${engineer.email}</a></li>
            <li>Github:<a>https://github.com/${engineer.github}</a></li>
          </ul>
        </div>
      </div>`
    template.push(engineerTemplate);
    menuPrompt();
    });
}
const internPrompt= () => {    
    inquirer.prompt(promptsIntern).then(function(answer){
            intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        const internTemplate = `<div class="card">
        <div class="container">
          <h4><b>${intern.name}</b></h4>
          <p>Intern</p>
          <ul>
            <li>ID# ${intern.id}</li>
            <li><a>${intern.email}</a></li>
            <li>School: ${intern.school}</li>
          </ul>
        </div>
      </div>`
        template.push(internTemplate);
        menuPrompt();
    
        });
};
const menuPrompt = () => {
    inquirer.prompt(promptsMenu).then(function(answer){
        if(answer.choice === 'Engineer'){
            engineerPrompt();
        } else if(answer.choice === 'Intern') {
            internPrompt();
        } else{
            addToHtml(template);
        }
    });
};

const writeToFile = (data) => {
    fs.writeFile('./src/index.html', data, function (err) {
    if (err) return console.log(err);
    console.log('index.html created');
  });
};

const addToHtml= (template) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles.css">
        <title>Team Profile</title>
    </head>
    <body>
    <h1>Team Profile</h1>
    ${template}    
    </body>
    </html>`
    writeToFile(html);
}

managerPrompt();


