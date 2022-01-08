const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://127.0.0.1:4000/events", event);
  axios.post("http://127.0.0.1:4001/events", event);
  axios.post("http://127.0.0.1:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
