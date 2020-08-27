const employeeTest = require('ava');
const { Employee } = require('../src/employee');
const employee = require('../src/employee');

employeeTest('employee test case1', t => {
    try {
        new Employee('fox', 'test')
        t.fail()
    } catch(e) {
        t.is('Employee cannot be of type test', e.message)
    }
})

employeeTest('employee test case2', t => {
    try {
        let employee = new Employee('fox', 'manager')
        t.is('fox (manager)', employee.toString())
    } catch(e) {

    }
})