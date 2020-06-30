const Manager = require("../lib/Manager");

// test 1
test("Can set office number via constructor argument", () => {
	const testValue = 100;
	const e = new Manager("Foo", 1, "test@test.com", testValue);
	expect(e.officeNumber).toBe(testValue);
});
// test 2
test('getRole() should return "Manager"', () => {
	const testValue = "Manager";
	const e = new Manager("Foo", 1, "test@test.com", 100);
	expect(e.getRole()).toBe(testValue);
});
// test 3
test("Can get office number via getOfficeNumber()", () => {
	const testValue = 100;
	const e = new Manager("Foo", 1, "test@test.com", testValue);
	expect(e.getOfficeNumber()).toBe(testValue);
});
// test 4 (added practice test)
test("getName() is undefined when no name is assigned", () => {
	const testValue = undefined;
	const e = new Manager();
	expect(e.getName()).toBe(testValue);
});
// test 5 (added practice test)
test("getRole() returns 'Manager' if no arguments are passed in constructor", () => {
	const testValue = "Manager";
	const e = new Manager();
	expect(e.getRole()).toBe(testValue);
});
