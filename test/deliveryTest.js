const deliveryTest = require('ava');
const { deliveryDate } = require('../src/delivery');

deliveryTest('delivery test case1', t => {
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (num) => {
                return num;
            }
        }
    }
    const isRush = true
    t.is(deliveryDate(anOrder, isRush), 2)
})