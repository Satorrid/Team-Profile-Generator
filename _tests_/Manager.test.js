const Manager = require('../lib/manager');
 
describe('manager', () => {
  it('remembers its parameters', () => {
    const manager = new Manager('thisManager', 12, 'email@gmail.com', 1234)
    expect(manager.getOfficeNumber()).toBe(1234)
    expect(manager.getRole()).toBe('Manager')
  })

});
