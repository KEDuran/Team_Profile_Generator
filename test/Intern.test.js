const Intern = require("../lib/Intern");
// test 1
test("Can set school via constructor", () => {
	const testValue = "UCLA";
	const e = new Intern("Foo", 1, "test@test.com", testValue);
	expect(e.school).toBe(testValue);
});
// test 2
test('getRole() should return "Intern"', () => {
	const testValue = "Intern";
	const e = new Intern("Foo", 1, "test@test.com", "UCLA");
	expect(e.getRole()).toBe(testValue);
});
// test 3
test("Can get school via getSchool()", () => {
	const testValue = "UCLA";
	const e = new Intern("Foo", 1, "test@test.com", testValue);
	expect(e.getSchool()).toBe(testValue);
});
// test 4 (added practice test)
test("getName() is undefined when no name is assigned", () => {
	const testValue = undefined;
	const e = new Intern();
	expect(e.getName()).toBe(testValue);
});
// test 5 (added practice test)
test("getRole() returns 'Intern' if no arguments are passed in constructor", () => {
	const testValue = "Intern";
	const e = new Intern();
	expect(e.getRole()).toBe(testValue);
});
