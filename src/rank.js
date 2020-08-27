const vrLengthCompare = (length) => {
  let result = 1;
  if (length > 4) {
    result += 2;
  }
  if (length > 8) {
    result += (length - 8);
  }
  return result
} 

function voyageRisk (voyage) {
  if ([
    'china',
    'east-indies',
  ].includes(voyage.zone)) {
    return vrLengthCompare(voyage.length) + 4;
  }
  return vrLengthCompare(voyage.length);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

const aboutChina = (zone, history) => {
  return zone === 'china' && hasChina(history)
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (aboutChina(voyage.zone, history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

const vpfAboutChina = (result, history, voyage) => {
  let res = result
  res += 3;
  if (history.length > 10) {
    res += 1;
  }
  if (voyage.length > 12) {
    res += 1;
  }
  if (voyage.length > 18) {
    res -= 1;
  }
  return res
}

const vpfNotAboutChina = (result, history, voyage) => {
  let res = result
  if (history.length > 8) {
    res += 1;
  }
  if (voyage.length > 14) {
    res -= 1;
  }
  return res
}

const vpfAboutChinaorEastIndies = (zone) => {
  let result = 2
  if (zone === 'china' || zone === 'east-indies') {
    result += 1;
  }
  return result
}

function voyageProfitFactor (voyage, history) {
  if (aboutChina(voyage.zone, history)) {
    return vpfAboutChina(vpfAboutChinaorEastIndies(voyage.zone), history, voyage)
  }
  else {
    return vpfNotAboutChina(vpfAboutChinaorEastIndies(voyage.zone), history, voyage)
  }
}

const compare = (vpf, vr, chr) => {
  return vpf * 3 > (vr + chr * 2)
}

function rating (voyage, history) {
  return compare(voyageProfitFactor(voyage, history), voyageRisk(voyage), captainHistoryRisk(voyage, history))? 'A' : 'B'
}

module.exports = {
  rating
};
