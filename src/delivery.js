const inIsRush = (anOrder) => {
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    return 1
  }
  if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    return 2
  }
  return 3
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
  return isRush?anOrder.placedOn.plusDays(1 + inIsRush(anOrder)):anOrder.placedOn.plusDays(2 + notInIsRush(anOrder))
}

module.exports = {
  deliveryDate
}
