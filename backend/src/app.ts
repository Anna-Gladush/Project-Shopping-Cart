import type { Express, Request, Response } from "express";
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Discogs = require("disconnect").Client;

const id_masters = require("./id_data");
import type { discogs } from "./discogs";

dotenv.config();

const app: Express = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response<{message: string}>) => {
  res.json({ message: "It works!" });
});

app.get("/api", async (req: Request, res: Response) => {
  const db = new Discogs({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
  }).database();

  try {
    const promises = id_masters.map((id: number) => {
      return new Promise((resolve) => {
        db.getMaster(id, function (err: unknown, data: discogs) {
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

app.listen(PORT, (): void => {
  console.log("Listening on port: ", PORT);
});
