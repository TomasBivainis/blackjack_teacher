const express = require("express");
const bodyParser = require("body-parser");
const globals = require("./globals");
const api = require("./api");
const cors = require("cors");

const app = express();

const port = 5050;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Ok");
});

app.get("/card", (req, res) => {
  const { deck } = req.body;

  let randomNumber = Math.floor(Math.random() * deck.length);

  res.json({ card: deck[randomNumber] });
});

app.get("/deck", (req, res) => {
  let { size } = req.query;

  let deck = [];

  while (size > 0) {
    deck = deck.concat(globals.fullDeck);
    size--;
  }

  res.json(deck);
});

app.get("/situation", (req, res) => {
  const playerCards = [];
  const dealerCards = [];

  playerCards.push(
    globals.fullDeck[Math.floor(Math.random() * globals.fullDeck.length)]
  );

  playerCards.push(
    globals.fullDeck[Math.floor(Math.random() * globals.fullDeck.length)]
  );

  dealerCards.push(
    globals.fullDeck[Math.floor(Math.random() * globals.fullDeck.length)]
  );

  res.json({
    playerCards,
    dealerCards,
  });
});

app.post("/bestMove", (req, res) => {
  const { playerCards, dealerCards, settings } = req.body;

  let bestMove = api.determineBestMove(playerCards, dealerCards, settings);

  res.json({ bestMove });
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
