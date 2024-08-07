import "./style.css";
import { getCardScore, playingCards, moves } from "./module";
import list from "./icons/list.svg";
import cardImages from "./cards";

document.querySelector("#list_img").src = list;

let doubleAllowed = false;
let DASOffered = false;

let currentDeck;

let dealerCards = [];
let playerCards = [];

function clearCards() {
  dealerCards = [];
  playerCards = [];
}

function btnClick(move) {
  displayResult(isCorrectMove(move));
}

function displayResult(isCorrect) {
  hideResults();

  document.querySelector("#waiting").hidden = true;
  document.querySelector(".continue").hidden = false;

  if (isCorrect) {
    document.querySelector("#correct").hidden = false;
  } else {
    document.querySelector("#incorrect").hidden = false;
  }
}

function hideResults() {
  document.querySelector(".continue").hidden = true;
  document.querySelector("#correct").hidden = true;
  document.querySelector("#incorrect").hidden = true;
  document.querySelector("#waiting").hidden = false;
}

function displayCards() {
  const divDealerCards = document.querySelector("#dealer_cards");
  const divPlayerCards = document.querySelector("#player_cards");

  divDealerCards.innerHTML = "";
  divPlayerCards.innerHTML = "";

  {
    const img = document.createElement("img");

    img.src = cardImages.back;
    img.classList.add("card");

    divDealerCards.appendChild(img);
  }

  dealerCards.forEach((card) => {
    const img = document.createElement("img");

    img.src = cardImages[card];
    img.classList.add("card");

    divDealerCards.appendChild(img);
  });

  playerCards.forEach((card) => {
    const img = document.createElement("img");

    img.src = cardImages[card];
    img.classList.add("card");

    divPlayerCards.appendChild(img);
  });
}

function giveCard(cards) {
  let number = Math.floor(Math.random() * currentDeck.length);
  cards.push(currentDeck[number]);
  currentDeck.splice(number, 1);
}

function determineBestMove() {
  let dealerCard = getCardScore(dealerCards[0]);
  let playerCard1 = getCardScore(playerCards[0]);
  let playerCard2 = getCardScore(playerCards[1]);

  let playerScore = playerCard1 + playerCard2;

  // If player has pairs
  if (playerCard1 === playerCard2) {
    switch (playerCard1) {
      case 2:
        if (
          (dealerCard < 4 && DASOffered) ||
          (4 <= dealerCard && dealerCard <= 7)
        )
          return moves.split;
        break;
      case 3:
        if (
          (dealerCard < 4 && DASOffered) ||
          (4 <= dealerCard && dealerCard <= 7)
        )
          return moves.split;
        break;
      case 4:
        if (5 <= dealerCard && dealerCard <= 6 && DASOffered)
          return moves.split;
        break;
      case 5:
        break;
      case 6:
        if (
          (dealerCard === 2 && DASOffered) ||
          (3 <= dealerCard && dealerCard <= 6)
        )
          return moves.split;
        break;
      case 7:
        if (dealerCard <= 7) return moves.split;
        break;
      case 8:
        return moves.split;
      case 9:
        if (dealerCard <= 6 || (8 <= dealerCard && dealerCard <= 9))
          return moves.split;
        break;
      case 10:
        break;
      case 11:
        return moves.split;
      default:
        break;
    }
  }

  // If player has an ace
  if (playerCard1 === 11 || playerCard2 === 11) {
    playerScore -= 11;

    switch (playerScore) {
      case 2:
        if (5 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return moves.doubleDown;
        return moves.hit;
      case 3:
        if (5 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return moves.doubleDown;
        return moves.hit;
      case 4:
        if (4 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return moves.doubleDown;
        return moves.hit;
      case 5:
        if (4 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return moves.doubleDown;
        return moves.hit;
      case 6:
        if (3 <= dealerCard && dealerCard <= 6 && doubleAllowed)
          return moves.doubleDown;
        return moves.hit;
      case 7:
        if (dealerCard <= 6 && doubleAllowed) return moves.doubleDown;
        else if (dealerCard <= 8) return moves.stand;
        return moves.hit;
      case 8:
        if (dealerCard === 6 && doubleAllowed) return moves.doubleDown;
        return moves.stand;
      default:
        return moves.stand;
    }
  }

  // If players has neither an ace, nor a pair

  if (playerScore <= 8) {
    return moves.hit;
  } else if (playerScore === 9) {
    if (3 <= dealerCard && dealerCard <= 6 && doubleAllowed)
      return moves.doubleDown;
    return moves.hit;
  } else if (playerScore === 10) {
    if (dealerCard <= 9 && doubleAllowed) return moves.doubleDown;
    return moves.hit;
  } else if (playerScore === 11) {
    if (doubleAllowed) return moves.doubleDown;
    return moves.hit;
  } else if (playerScore === 12) {
    if (4 <= dealerCard && dealerCard <= 6) return moves.stand;
    return moves.hit;
  } else if (13 <= playerScore && playerScore <= 16) {
    if (dealerCard <= 6) return moves.stand;
    return moves.hit;
  } else {
    return moves.stand;
  }
}

function isCorrectMove(move) {
  return move === determineBestMove();
}

function checkIfPairs() {
  if (playerCards[0].length !== playerCards[1].length) return false;
  if (playerCards[0].length === 3 || playerCards[0][1] === playerCards[1][1])
    return true;
  return false;
}

function startRound() {
  clearCards();
  hideResults();
  currentDeck = JSON.parse(JSON.stringify(playingCards));
  giveCard(playerCards);
  giveCard(playerCards);
  giveCard(dealerCards);

  const btnSplit = document.querySelector("#split");

  if (checkIfPairs()) btnSplit.disabled = false;
  else btnSplit.disabled = true;

  displayCards();
}

function updateSettings() {
  const btnDoubleDown = document.querySelector("#double_down");

  const inputDAS = document.querySelector("#das-allowed");
  const inputDouble = document.querySelector("#doubling-allowed");

  doubleAllowed = inputDouble.checked;
  DASOffered = inputDAS.checked;

  btnDoubleDown.disabled = !doubleAllowed;
}

document
  .querySelector("#das-allowed")
  .addEventListener("change", updateSettings);

document
  .querySelector("#doubling-allowed")
  .addEventListener("change", updateSettings);

document.querySelector("#trigger").addEventListener("change", () => {
  document.querySelector(".menu_box").classList.toggle("trigger_checked");
});

document
  .querySelector("#hit")
  .addEventListener("click", () => btnClick(moves.hit));
document
  .querySelector("#stand")
  .addEventListener("click", () => btnClick(moves.stand));
document
  .querySelector("#split")
  .addEventListener("click", () => btnClick(moves.split));
document
  .querySelector("#double_down")
  .addEventListener("click", () => btnClick(moves.doubleDown));

document.querySelector(".continue").addEventListener("click", startRound);

startRound();
