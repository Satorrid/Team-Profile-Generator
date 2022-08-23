const inquirer = require('inquirer');
const path = require('path');
const buildManager = require('./src/manager')
const buildEngineer = require('./src/engineer')
const buildIntern = require('./src/intern')
const fs = require('fs').promises

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
    const { type } = await inquirer.prompt(question)
    let newEmployee
    switch (type) {
        case "manager":
            newEmployee = await buildManager()
            break
        case "engineer":
            newEmployee = await buildEngineer()
            break
        case "intern":
            newEmployee = await buildIntern()
            break
        case "done":
            writeToFile();
            return
    }
    cards.push(newEmployee)
    addNewEmployee();
}

async function writeToFile() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="title">
            My Team
        </div>
        <div class="card-container">
        ${cards.join('')}
        </div>
    </body>
    </html>`
    await fs.writeFile(path.join(__dirname, 'dist/index.html'), html)
}

run();