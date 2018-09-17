// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
  });
});