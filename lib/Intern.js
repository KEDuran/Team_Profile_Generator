// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// added link to Employee.js script to inherit from Employee class
const Employee = require("../lib/Employee");

// created Intern class
class Intern extends Employee {
	// for test 1
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}
	// test 2
	getRole() {
		return "Intern";
	}
}

module.exports = Intern;
