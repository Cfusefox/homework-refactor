const MA = ['MA', 'CT',]
const NY = ['NY', 'NH',]
const CT = ['MA', 'CT', 'NY',]
const ME = ['ME', 'NH']

const inIsRush = (anOrder) => {
  if (MA.includes(anOrder.deliveryState)) {
    return 1
  }
  if (NY.includes(anOrder.deliveryState)) {
    return 2
  }
  return 3
}

const notInIsRush = (anOrder) => {
  if (CT.includes(anOrder.deliveryState)) {
    return 2
  }
  if (ME.includes(anOrder.deliveryState)) {
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
