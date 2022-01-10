const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const allEmployees = []

const generateHtml = (employee) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1>My Team</h1>
        </div>
  </div>
  <div class="card" style="width: 15rem;">
        <h1 class="card-title">Emily</h1>
        <h2 class="card-text">Engineer</h2>
      <div class="card-body">
          <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee.id}</li>
                <li class="list-group-item">Email:${employee.email}</li>
                <li class="list-group-item">GitHub:${employee.github}</li>
                <li class="list-group-item">Office Number:${employee.officeNumber}</li>
                <li class="list-group-item">School:${employee.school}</li>
          </ul>
      </div>
</div>
</body>
</html>`;

function generalPrompts() {
    inquirer
    .prompt([
        {
            name:'name',
            type:'input',
            message:'Employee Name'
        },
        {
            name:'position',
            type:'list',
            message:'Employee position',
            choices:['Manager', 'Engineer', 'Intern',]
        },
        {
            name:'id',
            type:'input',
            message:'Employee ID'
        },
        {
            name:'email',
            type:'input',
            message:'Employee Email'
        },
    ])
    .then((response) => {
        if (response.position === 'Manager'){
        managerP(response)
        } else if (response.position === 'Engineer') {
        engineerP(response)
        } else if (response.position === 'Intern') {
        internP(response)
        }
    })
}

const managerP = (baseEmp) => {
    inquirer.prompt([
        {
            name:'officeNumber',
            type:'input',
            message:'Please enter Office Number'
        },
        {
            name:'additional',
            type:'list',
            message:'create an additional employee',
            choices:['yes', 'no']
        }
    ])
    .then(({officeNumber, additional}) => {
        const newManager = new Manager (baseEmp.name, baseEmp.id, baseEmp.email, officeNumber)
        allEmployees.push(newManager)
        if (additional === 'yes'){
            generalPrompts() 
        } else {
            console.log(allEmployees)
        }
    })
}

const engineerP = (baseEmp) => {
    inquirer.prompt([
        {
            name:'Github',
            type:'input',
            message:'Enter your github username'
        },
        {
            name:'additional',
            type:'list',
            message:'create an additional employee',
            choices:['yes', 'no']
        }
    ])
    .then(({Github, additional}) => {
        const newEngineer = new Engineer (baseEmp.name, baseEmp.id, baseEmp.email, Github)
        allEmployees.push(newEngineer)
        if (additional === 'yes'){
            generalPrompts() 
        } else {
            console.log(allEmployees)
        }
    })
}

const internP = (baseEmp) => {
    inquirer.prompt([
        {
            name:'School',
            type:'input',
            message:'What school did you attend'
        },
        {
            name:'additional',
            type:'list',
            message:'create an additional employee',
            choices:['yes', 'no']
        }
    ])
    .then(({School, additional}) => {
        const newIntern = new Intern (baseEmp.name, baseEmp.id, baseEmp.email, School)
        allEmployees.push(newIntern)
        if (additional === 'yes'){
            generalPrompts() 
        } else {
            console.log(allEmployees)
        }
    })
}
generalPrompts();