const printTest = require('ava');
const { printOwing, recodeDueDate } = require('../src/print');

printTest('print test case1', t => {
    const invoice = {
        customer: 'fox',
        borderSpacing: [
            {
                amount: 1,
            },
            {
                amount: 2,
            }
        ]
    }
    t.is(`***********************
    **** Customer Owes ****
    ***********************
    name: fox
    amount: 3
    amount: ${recodeDueDate()}`, printOwing(invoice))
})