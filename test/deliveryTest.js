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

deliveryTest('delivery test case2', t => {
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (num) => {
                return num;
            }
        }
    }
    const isRush = false
    t.is(deliveryDate(anOrder, isRush), 4)
})

deliveryTest('delivery test case3', t => {
    const anOrder = {
        deliveryState: 'GG',
        placedOn: {
            plusDays: (num) => {
                return num;
            }
        }
    }
    const isRush = true
    t.is(deliveryDate(anOrder, isRush), 4)
})

deliveryTest('delivery test case4', t => {
    const anOrder = {
        deliveryState: 'GG',
        placedOn: {
            plusDays: (num) => {
                return num;
            }
        }
    }
    const isRush = false
    t.is(deliveryDate(anOrder, isRush), 6)
})