const Engineer = require(`../lib/engineer`);

describe('Engineer', () => {
    describe('test the employee constructor', () => {
    it('should construct an employee with a name, id, and an email.', () => {
        const employee = new Engineer('sally', 1, 'gmail@gmail.com', 'treyrogers7');

        expect(employee.gitHub).toBe('treyrogers7')
        
    })
})
describe('test the employee constructor', () => {
    it('should construct an employee with methods getName, getId, getEmail.', () => {
        const employee = new Engineer('sally', 1, 'gmail@gmail.com', 'treyrogers7');

        expect(employee.getGitHub()).toBe('treyrogers7')
    })
})
})