import './style.css';

const divDealerCards = document.querySelector("#dealer_cards");
const divPlayerCards = document.querySelector("#player_cards");
const btnHit = document.querySelector("#hit");
const btnStand = document.querySelector("#stand");
const btnSplit = document.querySelector("#split");

const doubleAllowed = false;
const DASOffered = false;

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

let dealerCards = [];
let playerCards = [];

btnHit.addEventListener('click', () => btnClick(moves.hit));
btnStand.addEventListener('click', () => btnClick(moves.stand));
btnSplit.addEventListener('click', () => btnClick(moves.split));

function clearCards() {
  dealerCards = [];
  playerCards = [];
}

function btnClick(move) {
  checkMove(move);
  clearCards();
  startRound();
}

function turnCardsIntoString(cards) {
  let string = "";

  cards.forEach(card => {
    string += `${card} `;
  })
  
  return string;
}

function displayCards() {
  divDealerCards.innerHTML = turnCardsIntoString(dealerCards);
  divPlayerCards.innerHTML = turnCardsIntoString(playerCards);
}

function giveCard(cards) {
  let number = Math.floor(Math.random() * playingCards.length);
  cards.push(playingCards[number]);
}

function getCardScore(card) {
  card = card.substring(1);

  if(card === "A") return 11;
  else if(card === "J" || card === "Q" || card === "K") return 10;
  
  return parseInt(card);
}

function determineBestMove() {
  let dealerCard = getCardScore(dealerCards[0]);
  let playerCard1 = getCardScore(playerCards[0]);
  let playerCard2 = getCardScore(playerCards[1]);

  let playerScore = playerCard1 + playerCard2;

  // If player has pairs
  if(playerCard1 === playerCard2) {
    switch(playerCard1) {
      case 2:
        if((dealerCard < 4 && DASOffered) || (4 <= dealerCard && dealerCard <= 7)) return moves.split; 
        break;
      case 3:
        if((dealerCard < 4 && DASOffered) || (4 <= dealerCard && dealerCard <= 7)) return moves.split; 
        break;
      case 4:
        if(5 <= dealerCard && dealerCard <= 6 && DASOffered) return moves.split; 
        break;
      case 5:
        break;
      case 6:
        if((dealerCard === 2 && DASOffered) || (3 <= dealerCard && dealerCard <= 6)) return moves.split; 
        break;
      case 7:
        if(dealerCard <= 7) return moves.split; 
        break;
      case 8:
        return moves.split;
      case 9:
        if((dealerCard <= 6) || (8<= dealerCard && dealerCard <= 9)) return moves.split; 
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
  if(playerCard1 === 11 || playerCard2 === 11) {
    playerScore -= 11;

    switch(playerScore) {
      case 2:
        if(5 <= dealerCard && dealerCard <= 6 && doubleAllowed) return moves.doubleDown;
        return moves.hit;
      case 3:
        if(5 <= dealerCard && dealerCard <= 6 && doubleAllowed) return moves.doubleDown;
        return moves.hit;
      case 4:
        if(4 <= dealerCard && dealerCard <= 6 && doubleAllowed) return moves.doubleDown;
        return moves.hit;
      case 5:
        if(4 <= dealerCard && dealerCard <= 6 && doubleAllowed) return moves.doubleDown;
        return moves.hit;
      case 6:
        if(3 <= dealerCard && dealerCard <= 6 && doubleAllowed) return moves.doubleDown;
        return moves.hit;
      case 7:
        if(dealerCard <= 6 && doubleAllowed) return moves.doubleDown;
        else if(dealerCard <= 8) return moves.stand;
        return moves.hit;
      case 8:
        if(dealerCard === 6 && doubleAllowed) return moves.doubleDown;
        return moves.stand;
      default:
        return moves.stand;
    }
  }

  // If players has neither an ace, nor a pair

  if(playerScore <= 8) {
    return moves.hit;
  }
  else if(playerScore === 9) {
    if(3 <= dealerCard && dealerCard <= 6 && doubleAllowed) return moves.doubleDown;
    return moves.hit;
  }
  else if(playerScore === 10) {
    if(dealerCard <= 9 && doubleAllowed) return moves.doubleDown;
    return moves.hit;
  }
  else if(playerScore === 11) {
    if(doubleAllowed) return moves.doubleDown;
    return moves.hit;
  }
  else if(playerScore === 12) {
    if(4 <= dealerCard && dealerCard <= 6) return moves.stand;
    return moves.hit;
  }
  else if(13 <= playerScore && playerScore <= 16) {
    if(dealerCard <= 6) return moves.stand;
    return moves.hit;
  }
  else {
    return moves.stand;
  }
}

function checkMove(move) {
  if(move === determineBestMove()) console.log("good");
  else console.log("bad");
}

function startRound() {
  giveCard(playerCards);
  giveCard(playerCards);
  giveCard(dealerCards);
  displayCards();
}

startRound();