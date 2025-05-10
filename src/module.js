function clearDeck(deck) {
  deck = [];
}

function turnCardsIntoString(cards) {
  let string = "";

  cards.forEach(card => {
    string += `${card} `;
  })
  
  return string;
}

function getCardScore(card) {
  card = card.substring(1);

  if(card === "A") return 11;
  else if(card === "J" || card === "Q" || card === "K") return 10;
  
  return parseInt(card);
}

const playingCards = [
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "H9",
  "H10",
  "HJ",
  "HQ",
  "HK",
  "HA",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "D9",
  "D10",
  "DJ",
  "DQ",
  "DK",
  "DA",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "C10",
  "CJ",
  "CQ",
  "CK",
  "CA",
  "S2",
  "S3",
  "S4",
  "S5",
  "S6",
  "S7",
  "S8",
  "S9",
  "S10",
  "SJ",
  "SQ",
  "SK",
  "SA"
]

const moves = {
  hit: "Hit",
  stand: "Stand",
  split: "Split",
  doubleDown: "DoubleDown"
};

const moveEval = {
  correct: 'correct',
  incorrect: 'incorrect'
}

module.exports = {
  clearDeck,
  turnCardsIntoString,
  getCardScore,
  playingCards,
  moves,
  moveEval
}