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
  <div class="card" style="width: 18rem;">
        <h3 class="card-title">${employee[0].getRole()}</h3>
        <h5 class="card-text">${employee[0].name}</h5>
      <div class="card-body">
          <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee[0].id}</li>
                <li class="list-group-item">Email:${employee[0].email}</li>
                <li class="list-group-item">Office Number:${employee[0].officeNumber}</li>
          </ul>
          <div class="card" style="width: 18rem;">
        <h3 class="card-title">${employee[1].getRole()}</h3>
        <h5 class="card-text">${employee[1].name}</h5>
      <div class="card-body">
          <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee[1].id}</li>
                <li class="list-group-item">Email:${employee[1].email}</li>
                <li class="list-group-item">GitHub:${employee[1].github}</li>
          </ul>
          <div class="card" style="width: 18rem;">
        <h3 class="card-title">${employee[2].getRole()}</h3>
        <h5 class="card-text">${employee[2].name}</h5>
      <div class="card-body">
          <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee[2].id}</li>
                <li class="list-group-item">Email:${employee[2].email}</li>
                <li class="list-group-item">School:${employee[2].school}</li>
          </ul>
          <div class="card" style="width: 18rem;">
        <h3 class="card-title">${employee[3].getRole()}</h3>
        <h5 class="card-text">${employee[3].name}</h5>
      <div class="card-body">
          <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee[3].id}</li>
                <li class="list-group-item">Email:${employee[3].email}</li>
                <li class="list-group-item">School:${employee[3].school}</li>
          </ul>
      </div>
</div>
</body>
</html>`;

function generalPrompts() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Employee Name'
            },
            {
                name: 'position',
                type: 'list',
                message: 'Employee position',
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                name: 'id',
                type: 'input',
                message: 'Employee ID'
            },
            {
                name: 'email',
                type: 'input',
                message: 'Employee Email'
            },
        ])
        .then((response) => {
            if (response.position === 'Manager') {
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
            name: 'officeNumber',
            type: 'input',
            message: 'Please enter Office Number'
        },
        {
            name: 'additional',
            type: 'list',
            message: 'create an additional employee',
            choices: ['yes', 'no']
        }
    ])
        .then(({ officeNumber, additional }) => {
            const newManager = new Manager(baseEmp.name, baseEmp.id, baseEmp.email, officeNumber)
            allEmployees.push(newManager)
            if (additional === 'yes') {
                generalPrompts()
            } else {
                init(allEmployees)
            }
        })
}

const engineerP = (baseEmp) => {
    inquirer.prompt([
        {
            name: 'Github',
            type: 'input',
            message: 'Enter your github username'
        },
        {
            name: 'additional',
            type: 'list',
            message: 'create an additional employee',
            choices: ['yes', 'no']
        }
    ])
        .then(({ Github, additional }) => {
            const newEngineer = new Engineer(baseEmp.name, baseEmp.id, baseEmp.email, Github)
            allEmployees.push(newEngineer)
            if (additional === 'yes') {
                generalPrompts()
            } else {
                init(allEmployees)
            }
        })
}

const internP = (baseEmp) => {
    inquirer.prompt([
        {
            name: 'School',
            type: 'input',
            message: 'What school did you attend'
        },
        {
            name: 'additional',
            type: 'list',
            message: 'create an additional employee',
            choices: ['yes', 'no']
        }
    ])
        .then(({ School, additional }) => {
            const newIntern = new Intern(baseEmp.name, baseEmp.id, baseEmp.email, School)
            allEmployees.push(newIntern)
            if (additional === 'yes') {
                generalPrompts()
            } else {
                init(allEmployees)
            }
        })
}

// const htmlContent = generateHtml(allEmployees);

init = function (data) {

    fs.writeFile('./dist/index.html', generateHtml(data), (err) =>
        err ? console.log(err) : console.log('index.html successfully generated!'));
}
generalPrompts();