function flipCardName(name) {
  return name[name.length - 1] + name[0];
}

function hasPairs(cards) {
  return cards.length === 2 && cards[0].substring(1) === cards[1].substring(1);
}

module.exports = {
  flipCardName,
  hasPairs,
};
