const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

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
        menuPrompt();
    });
}

const engineerPrompt= () => {
    inquirer.prompt(promptsEngineer).then(function(answer) {
        engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        menuPrompt();
    });
}
const internPrompt= () => {    
    inquirer.prompt(promptsIntern).then(function(answer){
            intern = new Intern(answer.name, answer.id, answer.email, answer.school);
            menuPrompt();
        });
    };

const menuPrompt = () => {
    inquirer.prompt(promptsMenu).then(function(answer){
        if(answer.choice === 'Engineer'){
            engineerPrompt();
        } else if(answer.choice === 'Intern') {
            internPrompt();
        } else{console.log('None')}
    });
}

managerPrompt();

