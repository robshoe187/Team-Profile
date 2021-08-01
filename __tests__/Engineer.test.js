const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('rob', 1, 'rob.shoe187@gmail.com', 'robshoe187');
    
    expect(engineer.name);
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('rob.shoe187@gmail.com')
    expect(engineer.github).toBe('robshoe187');
    
  });

test('test github()', () => {
    const engineer = new Engineer('rob', 1, 'rob.shoe187@gmail.com', 'robshoe187');
    
    expect(engineer.getGithub()).toHaveProperty('github');

});

test('test getRole()', () => {
    const engineer = new Engineer('rob', 1, 'rob.shoe187@gmail.com', 'robshoe187');
    
    expect(engineer.getRole()).toHaveProperty('role');
});
