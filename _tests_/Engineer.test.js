const Engineer = require('../lib/engineer');

describe('engineer', () => {
  it('remembers its parameters', () => {
    const engineer = new Engineer('thisEngineer', 12, 'email@gmail.com', 'myname')
    expect(engineer.getGithub()).toBe('myname')
    expect(engineer.getRole()).toBe('Engineer')
  })

});
