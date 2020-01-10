var inquirer = require("inquirer")

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


var Kevin = new Intern("Kevin", "1", "kesuh42", "NU")
console.log(Kevin.getRole())