var AllCharacters = require("../models/allcharacters.js");

module.exports = function (app) {

  app.get("/api/all", function (req, res) {


    AllCharacters.findAll({}).then(function (results) {
      res.json(results);
    });

  });

  app.get("/api/view/:searchedCharacter", function (req, res) {


    AllCharacters.findAll({
      where: {
        name: req.params.searchedCharacter
      }
    }).then(function (results) {
      res.json(results);
    });

  });

  app.post("/api/new", function (req, res) {

    console.log("Character Data:");
    console.log(req.body);

    AllCharacters.create({
      routeName: req.body.routeName,
      name: req.body.name,
      role: req.body.role,
      age: req.body.age,
      forcePoints: req.body.forcePoints
    }).then(function (results) {
      res.end();
    });

  });

};