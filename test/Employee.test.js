const Employee = require("../lib/Employee");
// test 1
test("Can instantiate Employee instance", () => {
	const e = new Employee();
	expect(typeof e).toBe("object");
});
// test 2
test("Can set name via constructor arguments", () => {
	const name = "Alice";
	const e = new Employee(name);
	expect(e.name).toBe(name);
});
// test 3
test("Can set id via constructor argument", () => {
	const testValue = 100;
	const e = new Employee("Foo", testValue);
	expect(e.id).toBe(testValue);
});
// test 4
test("Can set email via constructor argument", () => {
	const testValue = "test@test.com";
	const e = new Employee("Foo", 1, testValue);
	expect(e.email).toBe(testValue);
});
// test 5
test("Can get name via getName()", () => {
	const testValue = "Alice";
	const e = new Employee(testValue);
	expect(e.getName()).toBe(testValue);
});
// test 6
test("Can get id via getId()", () => {
	const testValue = 100;
	const e = new Employee("Foo", testValue);
	expect(e.getId()).toBe(testValue);
});
// test 7
test("Can get email via getEmail()", () => {
	const testValue = "test@test.com";
	const e = new Employee("Foo", 1, testValue);
	expect(e.getEmail()).toBe(testValue);
});
// test 8
test('getRole() should return "Employee"', () => {
	const testValue = "Employee";
	const e = new Employee("Alice", 1, "test@test.com");
	expect(e.getRole()).toBe(testValue);
});
// test 9 (added practice test)
test("getName() is null when no name is assigned", () => {
	const testValue = undefined;
	const e = new Employee();
	expect(e.getName()).toBe(testValue);
});
