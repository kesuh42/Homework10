var classes = require("../classes")

describe("classes", () => {
    describe("Employee", () => {
        it("should return an object with name, ID, email, and role as properties", () => {
            var employee = new classes.Employee("Kevin", "1", "kesuh42@gmail.com")
            expect(employee.name).toEqual("Kevin")
            expect(employee.ID).toEqual("1")
            expect(employee.email).toEqual("kesuh42@gmail.com")
            expect(employee.title).toEqual("Employee")
        });
        it("should have methods that returns the employee's name, ID, email, and role", () => {
            var employee = new classes.Employee("Kevin", "1", "kesuh42@gmail.com")
            expect(employee.getName()).toEqual("Kevin")
            expect(employee.getID()).toEqual("1")
            expect(employee.getEmail()).toEqual("kesuh42@gmail.com")
            expect(employee.getRole()).toEqual("Employee")
        });
    })
    describe("Manager", () => {
        it("should be an instance of the employee class", () => {
            var manager = new classes.Manager("Kevin", "1", "kesuh42@gmail.com", "1")
            expect(manager instanceof classes.Employee).toEqual(true)
        });
        it("should have manager as its title, instead of employee", () => {
            var manager = new classes.Manager("Kevin", "1", "kesuh42@gmail.com", "1")
            expect(manager.title).toEqual("Manager")
        });
    })
    describe("Engineer", () => {
        it("should be an instance of the employee class", () => {
            var engineer = new classes.Engineer("Kevin", "1", "kesuh42@gmail.com", "kesuh42")
            expect(engineer instanceof classes.Employee).toEqual(true)
        });
        it("should have engineer as its title, instead of employee", () => {
            var engineer = new classes.Engineer("Kevin", "1", "kesuh42@gmail.com", "kesuh42")
            expect(engineer.title).toEqual("Engineer")
        });
        it("should have a method that returns a github username", () => {
            var engineer = new classes.Engineer("Kevin", "1", "kesuh42@gmail.com", "kesuh42")
            expect(engineer.getGithub()).toEqual("kesuh42")
        });
    })
    describe("Intern", () => {
        it("should be an instance of the employee class", () => {
            var intern = new classes.Intern("Kevin", "1", "kesuh42@gmail.com", "NU")
            expect(intern instanceof classes.Employee).toEqual(true)
        });
        it("should have intern as its title, instead of employee", () => {
            var intern = new classes.Intern("Kevin", "1", "kesuh42@gmail.com", "NU")
            expect(intern.title).toEqual("Intern")
        });
        it("should have a method that returns school", () => {
            var intern = new classes.Intern("Kevin", "1", "kesuh42@gmail.com", "NU")
            expect(intern.getSchool()).toEqual("NU")
        });
    })
})