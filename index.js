const inquirer = require('inquirer');
const buildManager = require('./src/manager')

const container = `<div class="title">
My Team
</div>
<div class="card-container">`
const cards = [];

async function run() {
    const manager = await buildManager()
    cards.push(manager)
    addNewEmployee();
}

const question = [
    {
        type: "list",
        name: "type",
        message: "What would you like to make?",
        choices: [
            "manager",
            "engineer",
            "intern",
            "done"
        ]
    }
];

async function addNewEmployee() {
    const {type} = await inquirer.prompt(question)
    let newEmployee 
    switch(type) {
        case "manager":
          newEmployee = await buildManager()
          break
        case "done":
            writeToFile();
            return
    }
    cards.push(newEmployee)
    addNewEmployee();
}

function writeToFile(){
    
}

run();