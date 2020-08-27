const rankTest = require('ava');
const {rating} = require('../src/rank')

rankTest('rank test case 1', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const myRating = rating(voyage, history);
  t.is(`myRating: ${myRating}`, 'myRating: B')
})