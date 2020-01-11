var inquirer = require("inquirer")
var employeeArray = []

class Employee {
    constructor(name, ID, email) {
        this.name = name
        this.ID = ID
        this.title = "Employee"
        this.email = email
    }
    getName() {
        return this.name
    }
    getID() {
        return this.ID
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.title
    }
}

class Manager extends Employee {
    constructor(name, ID, email, officeNumber){
        super(name, ID, email)
        this.officeNumber = officeNumber
        this.title = "Manager"
    }
}

class Engineer extends Employee {
    constructor(name, ID, email, Github){
        super(name, ID, email)
        this.Github = Github
        this.title = "Engineer"
    }
    getGithub() {
        return this.Github
    }
}

class Intern extends Employee {
    constructor(name, ID, email, school){
        super(name, ID, email)
        this.school = school
        this.title = "Intern"
    }
    getSchool() {
        return this.school
    }
}

var engineerQuestions = 
[
    {
        type: "input",
        name: "name",
        message: "What is this employee's name?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is this employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is this employee's github username?"
    },
    {
        type: "confirm",
        name: "additional",
        message: "Do you have additional team members to add?"
    }
]
var internQuestions = 
[
    {
        type: "input",
        name: "name",
        message: "What is this employee's name?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is this employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What school do this employee go to?"
    },
    {
        type: "confirm",
        name: "additional",
        message: "Do you have additional team members to add?"
    }
]

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is your ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is your office number?"
    },
    {
        type: "confirm",
        name: "additional",
        message: "Do you have additional team members to add?"
    },
]).then(async function(data){
    var manager = new Manager(data.name, data.ID, data.email, data.officenumber)
    employeeArray.push(manager)

    if (data.additional) {
        var {role} = await inquirer.prompt({
            type: "list",
            name: "role",
            choices: ["engineer", "intern"],
            message: "What is this employee's role?"
        })
        postmanagerLoop(role)
    }
    else {
        console.log("Your team should definitely consist of more than just a manager, please run the code again once you have an actual team. Dumb idiot.")
    }
})

async function postmanagerLoop(role) {
    if (role === "engineer") {
        var engineerData = await inquirer.prompt(engineerQuestions)
        var engineerObj = new Engineer(engineerData.name, engineerData.ID, engineerData.email, engineerData.Github)
        employeeArray.push(engineerObj)
        if (engineerData.additional) {
            var data = await inquirer.prompt({
                type: "list",
                name: "role",
                choices: ["engineer", "intern"],
                message: "What is this employee's role?"
            })
            postmanagerLoop(data.role)
        }
        else {
            console.log("Exiting the loop, array should be finished. Html should be built here using the array")
            console.log(employeeArray)
        }
    }
    if (role === "intern") {
        var internData = await inquirer.prompt(internQuestions)
        var internObj = new Intern(internData.name, internData.ID, internData.email, internData.school)
        employeeArray.push(internObj)
        if (internData.additional) {
            var data = await inquirer.prompt({
                type: "list",
                name: "role",
                choices: ["engineer", "intern"],
                message: "What is this employee's role?"
            })
            postmanagerLoop(data.role)
        }
        else {
            console.log("Exiting the loop, array should be finished. Html should be built here using the array")
            console.log(employeeArray)
        }
    }
}

