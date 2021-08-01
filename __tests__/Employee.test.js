const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Rob', 1,'rob.shoe187@gmail.com');
  
    expect(employee.name).toBe('Rob');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('rob.shoe187@gmail.com');

  });

test('test getName()', () => {
    const employee = new Employee('Rob', 1,'rob.shoe187@gmail.com');

    expect(employee.getName()).toHaveProperty('name');
});

test('test getId()', () => {
    const employee = new Employee('Rob', 1,'rob.shoe187@gmail.com');
    expect(employee.getId()).toHaveProperty('id');
});

test('test getEmail()', () => {
    const employee = new Employee('Rob', 1,'rob.shoe187@gmail.com');
    expect(employee.getEmail()).toHaveProperty('email');
});

test('test getRole()', () => {
    const employee = new Employee('Rob', 1,'rob.shoe187@gmail.com');
    expect(employee.getRole()).toHaveProperty('role');
});
