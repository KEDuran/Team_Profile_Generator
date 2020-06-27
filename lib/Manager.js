// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// added link to Employee.js script to inherit from Employee class
const Employee = require("../lib/Employee");

// created Manager class
class Manager extends Employee {
	// for test 1
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	// for test 2
	getRole() {
		return "Manager";
	}
	// for test 3
	getOfficeNumber() {
		return this.officeNumber;
	}
}

module.exports = Manager;
