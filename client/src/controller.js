const server = "http://localhost:5050/";

async function isCorrectMove(playerCards, dealerCards, settings, move) {
  const request = new Request(server + "bestMove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ playerCards, dealerCards, settings }),
  });

  let respnose = await fetch(request);

  const bestMove = (await respnose.json()).bestMove;

  console.log(move);
  console.log(bestMove);

  return move === bestMove;
}

async function getSituation() {
  const response = await fetch(server + "situation");
  const { playerCards, dealerCards } = await response.json();

  return { playerCards, dealerCards };
}

function getImageURL(name) {
  return server + "images/cards/" + name + ".png";
}

module.exports = {
  isCorrectMove,
  getSituation,
  getImageURL,
};
