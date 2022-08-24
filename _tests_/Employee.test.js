const Employee = require('../lib/employee');
 
describe('employee', () => {
  it('remembers its parameters', () => {
    const employee = new Employee('thisEmployee', 12, 'email@gmail.com')
    expect(employee.getName()).toBe('thisEmployee')
    expect(employee.getEmail()).toBe('email@gmail.com')
    expect(employee.getId()).toBe(12)
    expect(employee.getRole()).toBe('Employee')
  })

});
