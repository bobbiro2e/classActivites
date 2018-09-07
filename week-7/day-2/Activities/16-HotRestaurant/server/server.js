const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("listening on port: " + PORT);
});

const rez = [];
const wl = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/api/tables", function (req, res) {
    res.json(rez)
});

app.post("/api/reserve", function (req, res) {
    const table = req.body
    rez.push(table);
    res.json(table);
});