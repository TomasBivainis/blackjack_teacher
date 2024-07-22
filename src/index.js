import "./style.css";
import {
  clearDeck,
  turnCardsIntoString,
  getCardScore,
  playingCards,
  moves,
  moveEval,
} from "./module";
import list from "./icons/list.svg";

document.querySelector("#list_img").src = list;

const divDealerCards = document.querySelector("#dealer_cards");
const divPlayerCards = document.querySelector("#player_cards");
const btnHit = document.querySelector("#hit");
const btnStand = document.querySelector("#stand");
const btnSplit = document.querySelector("#split");
const btnDoubleDown = document.querySelector("#double_down");

let doubleAllowed = false;
let DASOffered = false;

let currentDeck;

let dealerCards = [];
let playerCards = [];

btnHit.addEventListener("click", () => btnClick(moves.hit));
btnStand.addEventListener("click", () => btnClick(moves.stand));
btnSplit.addEventListener("click", () => btnClick(moves.split));
btnDoubleDown.addEventListener("click", () => btnClick(moves.doubleDown));

function clearCards() {
  dealerCards = [];
  playerCards = [];
}

function btnClick(move) {
  checkMove(move);
  clearCards();
  startRound();
}

function displayCards() {
  divDealerCards.innerHTML = "";
  divPlayerCards.innerHTML = "";

  divDealerCards.innerHTML = turnCardsIntoString(dealerCards);
  divPlayerCards.innerHTML = turnCardsIntoString(playerCards);
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

function checkMove(move) {
  if (move === determineBestMove()) console.log("good");
  else console.log("bad");
}

function checkIfPairs() {
  return getCardScore(playerCards[0]) === getCardScore(playerCards[1]);
}

function checkButtons() {
  if (checkIfPairs()) btnSplit.disabled = false;
  else btnSplit.disabled = true;

  if (doubleAllowed) btnDoubleDown.disabled = false;
  else btnDoubleDown.disabled = true;
}

function startRound() {
  currentDeck = JSON.parse(JSON.stringify(playingCards));
  giveCard(playerCards);
  giveCard(playerCards);
  giveCard(dealerCards);

  checkButtons();

  displayCards();
}

function updateSettings() {
  console.log("lmao");
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

document.querySelector("#trigger").addEventListener("click", () => {
  console.log("here");
});

document.querySelector("#trigger").addEventListener("change", () => {
  document.querySelector(".menu_box").classList.toggle("trigger_checked");
});

startRound();
