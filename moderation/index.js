const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    data.status = data.content.includes("orange") ? "rejected" : "approved";
    await axios.post("http://event-bus-srv:4005/events", {
      type: "CommentModerated",
      data,
    });
  }
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
