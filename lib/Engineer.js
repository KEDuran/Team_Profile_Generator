// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// added link to Employee.js script to inherit from Employee class
const Employee = require("../lib/Employee");

// created Engineer class
class Engineer extends Employee {
	// for test 1
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}
}

module.exports = Engineer;
