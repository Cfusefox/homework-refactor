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

rankTest('rank test case 2', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ];
  const myRating = rating(voyage, history);
  t.is(`myRating: ${myRating}`, 'myRating: B')
})

rankTest('rank test case 3', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: -5,
    },
    {
      zone: 'china',
      profit: 10,
    }
  ];
  const myRating = rating(voyage, history);
  t.is(`myRating: ${myRating}`, 'myRating: A')
})

rankTest('rank test case 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: -5,
    },
    {
      zone: 'china',
      profit: 10,
    }
  ];
  const myRating = rating(voyage, history);
  t.is(`myRating: ${myRating}`, 'myRating: B')
})

rankTest('rank test case 5', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'west-indies',
      profit: -5,
    },
    {
      zone: 'china',
      profit: 12,
    }
  ];
  const myRating = rating(voyage, history);
  t.is(`myRating: ${myRating}`, 'myRating: A')
})

rankTest('rank test case 6', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'west-indies',
      profit: -5,
    },
    {
      zone: 'china',
      profit: 12,
    }
  ];
  const myRating = rating(voyage, history);
  t.is(`myRating: ${myRating}`, 'myRating: B')
})

rankTest('rank test case 7', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const myRating = rating(voyage, history);
  t.is(`myRating: ${myRating}`, 'myRating: B')
})