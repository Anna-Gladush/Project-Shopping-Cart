const id_masters = require("./id_data");

const express = require("express");
const dotenv = require("dotenv");
const Discogs = require("disconnect").Client;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "It works!" });
});

app.get("/api", async (req, res) => {
  db = new Discogs({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
  }).database();

  try {
    const promises = id_masters.map((id) => {
      return new Promise((resolve) => {
        db.getMaster(id, function (err, data) {
          if (err) {
            resolve(null);
            return;
          }
          resolve(data);
        });
      });
    });

    const results = await Promise.all(promises);

    res.json(results.filter(Boolean));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
