const Intern = require('../lib/intern');

describe('intern', () => {
  it('remembers its parameters', () => {
    const intern = new Intern('thisIntern', 12, 'email@gmail.com', 'ucsd')
    expect(intern.getSchool()).toBe('ucsd')
    expect(intern.getRole()).toBe('Intern')
  })

});
