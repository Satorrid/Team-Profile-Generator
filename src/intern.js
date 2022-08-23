const Intern = require('../lib/intern')
const inquirer = require ('inquirer')

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the interns' name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the interns' id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your interns email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is your interns school?"
    }
]

async function buildIntern() {
    const answers = await inquirer.prompt(questions)
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    return `<div class="card">
    <div class="card-head">
      <div>${intern.getName()}</div>
      <div>${intern.getRole()}</div>
    </div>
    <div class="card-body">
      <div>ID: ${intern.getId()}</div>
      <div>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
      <div>School: ${intern.getSchool()}</div>
    </div>
  </div>`
}

module.exports = buildIntern