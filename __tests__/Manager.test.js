const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('rob', 1, 'rob.shoe187@gmail.com', 234);
    
    expect(manager.name);
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('rob.shoe187@gmail.com')
    expect(manager.officeNumber).toBe(234);
    
  });

  test('test officeNumber()', () => {
    const manager = new Manager('rob', 1, 'rob.shoe187@gmail.com', '234');
    
    expect(manager.getofficeNumber()).toHaveProperty('officeNumber');

});

test('test getRole()', () => {
    const manager = new Manager('rob', 1, 'rob.shoe187@gmail.com', '234');
    
    expect(manager.getRole()).toHaveProperty('role');

});