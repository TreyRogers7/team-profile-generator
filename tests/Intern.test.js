const Intern = require(`../lib/intern`);

describe('Intern', () => {
    describe('test the employee constructor', () => {
    it('should construct an employee with a name, id, and an email.', () => {
        const employee = new Intern('sally', 1, 'gmail@gmail.com', 'columbia river');

        expect(employee.school).toBe('columbia river')
        
    })
})
describe('test the employee constructor', () => {
    it('should construct an employee with methods getName, getId, getEmail.', () => {
        const employee = new Intern('sally', 1, 'gmail@gmail.com', 'columbia river');

        expect(employee.getSchool()).toBe('columbia river')
    })
})
})