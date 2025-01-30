const express = require("express");

const app = express();

const port = 5050;

app.get("/", (req, res) => {
  res.send("Labas");
});

app.listen(port, () => {
  console.log("live");
});
