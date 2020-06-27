// TODO: Write code to define and export the Employee class

// for test 1
class Employee {
	constructor(name, id, email) {
		// for test 2
		this.name = name;
		// for test 3
		this.id = id;
		// for test 4
		this.email = email;
	}
	// for test 5
	getName() {
		return this.name;
	}
	// for test 6
	getId() {
		return this.id;
	}
	// for test 7
	getEmail() {
		return this.email;
	}
	// for test 8
	getRole() {
		return "Employee";
	}
}

module.exports = Employee;
