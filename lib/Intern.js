// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");


class Intern  extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id
        this.email = email
        this.school = school
    };

    getSchool() {
        return(this.school);
    }
    
};

module.exports = Intern;