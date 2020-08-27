const inIsRush = (anOrder) => {
  let deliveryTime;
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  }
  else if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else {
    deliveryTime = 3;
  }
  return deliveryTime
}

const notInIsRush = (anOrder) => {
  let deliveryTime;
  if ([
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else if ([
    'ME',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  }
  else {
    deliveryTime = 4;
  }
  return deliveryTime
}

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    return anOrder.placedOn.plusDays(1 + inIsRush(anOrder));
  }
  else {
    return anOrder.placedOn.plusDays(2 + notInIsRush(anOrder));
  }
}

module.exports = {
  deliveryDate
}
