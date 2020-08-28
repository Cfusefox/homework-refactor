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
  if ([
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState)) {
    return 2
  }
  if ([
    'ME',
    'NH',
  ].includes(anOrder.deliveryState)) {
    return  3;
  }
  return 4
}

function deliveryDate (anOrder) {
  return anOrder.isRush?anOrder.placedOn.plusDays(1 + inIsRush(anOrder)):anOrder.placedOn.plusDays(2 + notInIsRush(anOrder))
}

module.exports = {
  deliveryDate
}
