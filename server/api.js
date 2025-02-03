const cardUtils = require("./cardUtils");
const globals = require("./globals");

function determineBestMove(playerDeck, dealerDeck, configs) {
  const dealerCard = dealerDeck[0];
  const dealerScore = cardUtils.getCardScore(dealerCard);
  const playerScore = cardUtils.getDeckScore(playerDeck);
  const { DASOffered, doubleAllowed } = configs;

  // If player has pairs
  if (cardUtils.hasPair(playerDeck)) {
    switch (playerScore / 2) {
      case 2:
        if (
          (dealerScore < 4 && DASOffered) ||
          (4 <= dealerScore && dealerScore <= 7)
        )
          return globals.moves.split;
        break;
      case 3:
        if (
          (dealerScore < 4 && DASOffered) ||
          (4 <= dealerScore && dealerScore <= 7)
        )
          return globals.moves.split;
        break;
      case 4:
        if (5 <= dealerScore && dealerScore <= 6 && DASOffered)
          return globals.moves.split;
        break;
      case 5:
        break;
      case 6:
        if (
          (dealerScore === 2 && DASOffered) ||
          (3 <= dealerScore && dealerScore <= 6)
        )
          return globals.moves.split;
        break;
      case 7:
        if (dealerScore <= 7) return globals.moves.split;
        break;
      case 8:
        return globals.moves.split;
      case 9:
        if (dealerScore <= 6 || (8 <= dealerScore && dealerScore <= 9))
          return globals.moves.split;
        break;
      case 10:
        break;
      case 11:
        return globals.moves.split;
      default:
        break;
    }
  }

  // If player has an ace
  if (cardUtils.hasAce(playerDeck)) {
    playerScore -= 11;

    switch (playerScore) {
      case 2:
        if (5 <= dealerScore && dealerScore <= 6 && doubleAllowed)
          return globals.moves.doubleDown;
        return globals.moves.hit;
      case 3:
        if (5 <= dealerScore && dealerScore <= 6 && doubleAllowed)
          return globals.moves.doubleDown;
        return globals.moves.hit;
      case 4:
        if (4 <= dealerScore && dealerScore <= 6 && doubleAllowed)
          return globals.moves.doubleDown;
        return globals.moves.hit;
      case 5:
        if (4 <= dealerScore && dealerScore <= 6 && doubleAllowed)
          return globals.moves.doubleDown;
        return globals.moves.hit;
      case 6:
        if (3 <= dealerScore && dealerScore <= 6 && doubleAllowed)
          return globals.moves.doubleDown;
        return globals.moves.hit;
      case 7:
        if (dealerScore <= 6 && doubleAllowed) return globals.moves.doubleDown;
        else if (dealerScore <= 8) return globals.moves.stand;
        return globals.moves.hit;
      case 8:
        if (dealerScore === 6 && doubleAllowed) return globals.moves.doubleDown;
        return globals.moves.stand;
      default:
        return globals.moves.stand;
    }
  }

  // If players has neither an ace, nor a pair

  if (playerScore <= 8) {
    return globals.moves.hit;
  } else if (playerScore === 9) {
    if (3 <= dealerScore && dealerScore <= 6 && doubleAllowed)
      return globals.moves.doubleDown;
    return globals.moves.hit;
  } else if (playerScore === 10) {
    if (dealerScore <= 9 && doubleAllowed) return globals.moves.doubleDown;
    return globals.moves.hit;
  } else if (playerScore === 11) {
    if (doubleAllowed) return globals.moves.doubleDown;
    return globals.moves.hit;
  } else if (playerScore === 12) {
    if (4 <= dealerScore && dealerScore <= 6) return globals.moves.stand;
    return globals.moves.hit;
  } else if (13 <= playerScore && playerScore <= 16) {
    if (dealerScore <= 6) return globals.moves.stand;
    return globals.moves.hit;
  } else {
    return globals.moves.stand;
  }
}

module.exports = {
  determineBestMove,
};
