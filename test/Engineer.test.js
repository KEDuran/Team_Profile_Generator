const Engineer = require("../lib/Engineer");
// test 1
test("Can set GitHub account via constructor", () => {
	const testValue = "GitHubUser";
	const e = new Engineer("Foo", 1, "test@test.com", testValue);
	expect(e.github).toBe(testValue);
});
// test 2
test('getRole() should return "Engineer"', () => {
	const testValue = "Engineer";
	const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
	expect(e.getRole()).toBe(testValue);
});
// test 3
test("Can get GitHub username via getGithub()", () => {
	const testValue = "GitHubUser";
	const e = new Engineer("Foo", 1, "test@test.com", testValue);
	expect(e.getGithub()).toBe(testValue);
});
// test 4 (added practice test)
test("getName() is undefined when no name is assigned", () => {
	const testValue = undefined;
	const e = new Engineer();
	expect(e.getName()).toBe(testValue);
});
// test 5 (added practice test)
test("getRole() returns 'Engineer' if no arguments are passed in constructor", () => {
	const testValue = "Engineer";
	const e = new Engineer();
	expect(e.getRole()).toBe(testValue);
});
