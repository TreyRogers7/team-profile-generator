const Manager = require(`../lib/manager`)

describe('Manager', () => {
    describe('test the employee constructor', () => {
    it('should construct an employee with a name, id, and an email.', () => {
        const employee = new Manager('sally', 1, 'gmail@gmail.com', '123456');

        expect(employee.officeNumber).toBe('123456')
        
    })
})
describe('test the employee constructor', () => {
    it('should construct an employee with methods getName, getId, getEmail.', () => {
        const employee = new Manager('sally', 1, 'gmail@gmail.com', '123456');

        expect(employee.getOfficeNumber()).toBe('123456')
    })
})
})