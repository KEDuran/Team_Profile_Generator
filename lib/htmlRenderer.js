const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");
// render() function that will be invoked in app.js to render team html
const render = (employees) => {
	const html = [];

	html.push(
		employees
			.filter((employee) => employee.getRole() === "Manager")
			.map((manager) => renderManager(manager))
	);
	html.push(
		employees
			.filter((employee) => employee.getRole() === "Engineer")
			.map((engineer) => renderEngineer(engineer))
	);
	html.push(
		employees
			.filter((employee) => employee.getRole() === "Intern")
			.map((intern) => renderIntern(intern))
	);

	return renderMain(html.join(""));
};
// renderManager() function that will be used to render manager card
const renderManager = (manager) => {
	let template = fs.readFileSync(
		path.resolve(templatesDir, "manager.html"),
		"utf8"
	);
	template = replacePlaceholders(template, "name", manager.getName());
	template = replacePlaceholders(template, "role", manager.getRole());
	template = replacePlaceholders(template, "email", manager.getEmail());
	template = replacePlaceholders(template, "id", manager.getId());
	template = replacePlaceholders(
		template,
		"officeNumber",
		manager.getOfficeNumber()
	);
	return template;
};
// renderEngineer() function that will be used to render engineer card
const renderEngineer = (engineer) => {
	let template = fs.readFileSync(
		path.resolve(templatesDir, "engineer.html"),
		"utf8"
	);
	template = replacePlaceholders(template, "name", engineer.getName());
	template = replacePlaceholders(template, "role", engineer.getRole());
	template = replacePlaceholders(template, "email", engineer.getEmail());
	template = replacePlaceholders(template, "id", engineer.getId());
	template = replacePlaceholders(template, "github", engineer.getGithub());
	return template;
};
// renderIntern() function that will be used to render intern card
const renderIntern = (intern) => {
	let template = fs.readFileSync(
		path.resolve(templatesDir, "intern.html"),
		"utf8"
	);
	template = replacePlaceholders(template, "name", intern.getName());
	template = replacePlaceholders(template, "role", intern.getRole());
	template = replacePlaceholders(template, "email", intern.getEmail());
	template = replacePlaceholders(template, "id", intern.getId());
	template = replacePlaceholders(template, "school", intern.getSchool());
	return template;
};
// renderMain() function is used to replace the team placeholder in main.hml to poulate the html employee array
const renderMain = (html) => {
	const template = fs.readFileSync(
		path.resolve(templatesDir, "main.html"),
		"utf8"
	);
	return replacePlaceholders(template, "team", html);
};
// replacePlaceholder() utility function that allows replacement of placeholders
const replacePlaceholders = (template, placeholder, value) => {
	const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
	return template.replace(pattern, value);
};
// exports the render() in to allow invoking in other script files
module.exports = render;
