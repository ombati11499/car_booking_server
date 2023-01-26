require("dotenv");
const Dotenv = require('dotenv')
Dotenv.config()

const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.port
const app = express();
const modules = require('./src/modules')
const path = require('path');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/carbooking");

app.use(cors());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')));

app.post("/", (req, res) => {
  modules[req.body.module](req.body, res)
});

app.listen(port, () => console.log("server is running on port: " + port));
