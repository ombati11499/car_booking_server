require("dotenv");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3000; // process.env.port
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/carbooking");

app.use(cors());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.post("/", (req, res) => {
  console.log(req.body);
  res.send();
});

app.listen(port, () => console.log("server is running on port: " + port));
