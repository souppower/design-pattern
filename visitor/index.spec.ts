import { ConcreteVisitor, Employee, Employees } from "./visitor";

describe("Visitor", () => {
  test("An employee can gets a raise", () => {
    const lowSalary = 500;
    const newEmployee = new Employee(lowSalary);
    const visitor = new ConcreteVisitor();

    newEmployee.accept(visitor);
    expect(newEmployee.salary).toBe(lowSalary + 1000);
  });

  test("Everyone gets a raise", () => {
    const lowSalary = 500;
    const regularSalary = 1500;
    const highSalary = 3000;

    const newEmployee = new Employee(lowSalary);
    const regularEmployee = new Employee(regularSalary);
    const goodEmployee = new Employee(highSalary);

    const visitor = new ConcreteVisitor();
    const employees = new Employees([
      newEmployee,
      regularEmployee,
      goodEmployee
    ]);

    employees.accept(visitor);
    const expected = [lowSalary, regularSalary, highSalary].map(s => s + 1000);

    expect(employees.employees.map(e => e.salary)).toEqual(expected);
  });
});
