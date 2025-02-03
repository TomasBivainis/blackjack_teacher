function getCardScore(card) {
  card = card.substring(1);

  if (card === "A") return 11;
  else if (card === "J" || card === "Q" || card === "K") return 10;

  return parseInt(card);
}

function getDeckScore(cards) {
  let result = 0;

  cards.forEach((card) => {
    result += getCardScore(card);
  });

  return result;
}

function hasPair(deck) {
  return deck.length === 2 && deck[0] === deck[1];
}

function hasAce(deck) {
  deck.forEach((card) => {
    if (getCardScore(card) === 11) return true;
  });

  return false;
}

module.exports = {
  getCardScore,
  getDeckScore,
  hasPair,
  hasAce,
};
