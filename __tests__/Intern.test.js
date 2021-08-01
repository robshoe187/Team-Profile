const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('rob', 1, 'rob.shoe187@gmail.com', 'UCONN');
    
    expect(intern.name);
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('rob.shoe187@gmail.com')
    expect(intern.school).toBe('UCONN');
    
  });


  
test('test getSchool()', () => {
    const intern = new Intern('rob', 1, 'rob.shoe187@gmail.com', 'UCONN');
    
    expect(intern.getSchool()).toHaveProperty('school');

});

test('test getRole()', () => {
    const intern = new Intern('rob', 1, 'rob.shoe187@gmail.com', 'UCONN');
    
    expect(intern.getRole()).toHaveProperty('role');

});

