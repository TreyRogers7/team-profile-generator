const Employee = require(`../lib/employee`);

describe('Employee', () => {
    describe('test the employee constructor', () => {
        it('should construct an employee object.', () => {
            const employee = new Employee('sally', 1, 'gmail@gmail.com');

            expect(typeof(employee)).toBe('object')
        })
    })

    describe('test the employee constructor', () => {
    it('should construct an employee with a name, id, and an email.', () => {
        const employee = new Employee('sally', 1, 'gmail@gmail.com');

        expect(employee.name).toBe('sally')
        expect(employee.id).toBe(1)
        expect(employee.email).toBe('gmail@gmail.com')
    })
})
describe('test the employee constructor', () => {
    it('should construct an employee with methods getName, getId, getEmail.', () => {
        const employee = new Employee('sally', 1, 'gmail@gmail.com');

        expect(employee.getName()).toBe('sally')
        expect(employee.getId()).toBe(1)
        expect(employee.getEmail()).toBe('gmail@gmail.com')
    })
})
})