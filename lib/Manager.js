// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");

class Manager  extends Employee {
    constructor(name, id, email, number) {
        this.name = name;
        this.id = id
        this.email = email
        this.number = number
    };

    getSchool() {
        return(this.number);
    }
    
};

module.exports = Manager;