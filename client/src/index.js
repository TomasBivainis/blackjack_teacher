import "./style.css";
import { moves } from "./globals.js";
import list from "./icons/list.svg";
import { getSituation, isCorrectMove, getImageURL } from "./controller";
import { flipCardName, hasPairs } from "./utils.js";

document.querySelector("#list_img").src = list;

const btnHit = document.querySelector("#hit");
const btnStand = document.querySelector("#stand");
const btnSplit = document.querySelector("#split");
const btnDoubleDown = document.querySelector("#double_down");

let playerCards;
let dealerCards;

async function btnClick(playerCards, dealerCards, move) {
  const result = await isCorrectMove(
    playerCards,
    dealerCards,
    getSettings(),
    move
  );

  displayResult(result);
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

async function startRound() {
  hideResults();

  const situation = await getSituation();

  playerCards = situation.playerCards;
  dealerCards = situation.dealerCards;

  updateSplitButton(playerCards);

  displayCards(playerCards, dealerCards);
}

function displayCards(playerCards, dealerCards) {
  const divDealerCards = document.querySelector("#dealer_cards");
  const divPlayerCards = document.querySelector("#player_cards");

  divDealerCards.innerHTML = "";
  divPlayerCards.innerHTML = "";

  {
    const img = document.createElement("img");

    img.src = getImageURL("back");
    img.classList.add("card");

    divDealerCards.appendChild(img);
  }

  dealerCards.forEach((card) => {
    const img = document.createElement("img");

    img.src = getImageURL(flipCardName(card));
    img.classList.add("card");

    divDealerCards.appendChild(img);
  });

  playerCards.forEach((card) => {
    const img = document.createElement("img");

    img.src = getImageURL(flipCardName(card));
    img.classList.add("card");

    divPlayerCards.appendChild(img);
  });
}

function updateSplitButton(playerCards) {
  const splitBtn = document.querySelector("#split");

  splitBtn.disabled = !hasPairs(playerCards);
}

function updateSettings() {
  const btnDoubleDown = document.querySelector("#double_down");
  const inputDouble = document.querySelector("#doubling-allowed");

  btnDoubleDown.disabled = !inputDouble.checked;
}

function getSettings() {
  const inputDAS = document.querySelector("#das-allowed");
  const inputDouble = document.querySelector("#doubling-allowed");

  return {
    doubleAllowed: inputDouble.checked,
    DASOffered: inputDAS.checked,
  };
}

document
  .querySelector("#doubling-allowed")
  .addEventListener("change", updateSettings);

document.querySelector("#trigger").addEventListener("change", () => {
  document.querySelector(".menu_box").classList.toggle("trigger_checked");
});

document.querySelector(".continue").addEventListener("click", startRound);

btnHit.addEventListener("click", () =>
  btnClick(playerCards, dealerCards, moves.hit)
);

btnStand.addEventListener("click", () =>
  btnClick(playerCards, dealerCards, moves.stand)
);

btnSplit.addEventListener("click", () =>
  btnClick(playerCards, dealerCards, moves.split)
);

btnDoubleDown.addEventListener("click", () =>
  btnClick(playerCards, dealerCards, moves.doubleDown)
);

startRound();
