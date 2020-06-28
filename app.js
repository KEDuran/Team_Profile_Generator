const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Function used to validate general entry questions. Not applicable to email or numbers.
function validation(value) {
	if (value != "") {
		return true;
	} else {
		return "Please answer the question.";
	}
}

// questions for manager role (no role specific questions needed here)
const managerQuestions = [
	// asks for manager's name
	{
		type: "input",
		name: "name",
		message: "Please enter manager's full name to begin creating team webpage?",
		validate: validation,
	},

	// asks for manager's id
	{
		type: "input",
		name: "id",
		message: "What is the manager's ID number?",
		validate: function (value) {
			if (!/^[0-9]+$/.test(value)) {
				return "ID must be a numerical value greater than zero.";
			} else {
				return true;
			}
		},
	},

	// asks for manager's email
	{
		type: "input",
		name: "email",
		message: "What is the manager's email?",
		validate: function (value) {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
				return true;
			} else {
				return "Not a valid email. Please enter valid email.";
			}
		},
	},
	// asks for manager's office number
	{
		type: "input",
		name: "officeNumber",
		message: "What is the manager's office number?",
		validate: function (value) {
			if (!/^[0-9]+$/.test(value)) {
				return "ID must be a numerical value greater than zero.";
			} else {
				return true;
			}
		},
	},
];
// questions for engineer role
const engineerQuestions = [
	// asks for engineer's name
	{
		type: "input",
		name: "name",
		message: "What is the engineer's full name?",
		validate: validation,
	},
	// asks for engineer's id
	{
		type: "input",
		name: "id",
		message: "What is the engineer's ID number?",
		validate: function (value) {
			if (!/^[0-9]+$/.test(value)) {
				return "ID must be a numerical value greater than zero.";
			} else {
				return true;
			}
		},
	},
	// asks for engineer's email
	{
		type: "input",
		name: "email",
		message: "What is the engineer's email?",
		validate: function (value) {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
				return true;
			} else {
				return "Not a valid email. Please enter valid email.";
			}
		},
	},
	// asks for engineer's Github username
	{
		type: "input",
		name: "github",
		message: "What is the engineer's GitHub username?",
		validate: validation,
	},
];
// questions for intern role
const internQuestions = [
	// asks for intern's name
	{
		type: "input",
		name: "name",
		message: "What is the intern's full name?",
		validate: validation,
	},
	// asks for intern's id
	{
		type: "input",
		name: "id",
		message: "What is the intern's ID number?",
		validate: function (value) {
			if (!/^[0-9]+$/.test(value)) {
				return "ID must be a numerical value greater than zero.";
			} else {
				return true;
			}
		},
	},
	// asks for intern's email
	{
		type: "input",
		name: "email",
		message: "What is the intern's email?",
		validate: function (value) {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
				return true;
			} else {
				return "Not a valid email. Please enter valid email.";
			}
		},
	},
	// asks for intern's school
	{
		type: "input",
		name: "school",
		message: "What is the name of the school the intern attends?",
		validate: validation,
	},
];
// question for adding another team member
const addMoreTeamMembers = [
	// asks if user needs to add another team member (Y/N)
	{
		type: "confirm",
		name: "newTeamMembers",
		message: "Do you want to add another another team member?",
		default: false,
	},
];
// question for role of new team member
const teamMemberRole = [
	// asks for the team member's role (not prompting for manager since there should only be one manager)
	{
		type: "list",
		name: "role",
		message: "What is the role of the team member you would like to add?",
		choices: ["Engineer", "Intern"],
		validate: validation,
	},
];
// global variable to store employee data
var employeeData = [];
// function to trigger logic to add more team members
function add() {
	// starts inquirer prompt for adding new team members
	inquirer.prompt(addMoreTeamMembers).then((answer) => {
		if (answer.newTeamMembers) {
			// prompts for role of new team member
			inquirer.prompt(teamMemberRole).then((roleSelection) => {
				// prompts for the engineer role
				if (roleSelection.role === "Engineer") {
					inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
						// using Engineer construtor class to create new engineer entry based on answers to questions
						let newEngineer = new Engineer(
							engineerAnswers.name,
							engineerAnswers.id,
							engineerAnswers.email,
							engineerAnswers.github
						);
						// appending engineer data into the employeeData array
						employeeData.push(newEngineer);
						// invoking add() function here to create a recursive (objects calling themselves) loop
						add();
					});
				} else {
					// prompts for the intern role
					inquirer.prompt(internQuestions).then((internAnswers) => {
						// using intern construtor class to create new intern entry based on answers to questions
						let newIntern = new Intern(
							internAnswers.name,
							internAnswers.id,
							internAnswers.email,
							internAnswers.school
						);
						// invoking add() function here to create a recursive (objects calling themselves) loop
						add();
					});
				}
			});
		}
	});
}

// start inquirer prompt for manager questions
inquirer.prompt(managerQuestions).then((managerAnswers) => {
	// using Manager construtor class to create new manager entry based on answers to questions
	let newManager = new Manager(
		managerAnswers.name,
		managerAnswers.id,
		managerAnswers.email,
		managerAnswers.officeNumber
	);
	// appending manager data into the employeeData array
	employeeData.push(newManager);
	// invoking add() function to prompt for additional of team members
	add();
});

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
