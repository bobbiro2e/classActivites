var express = require("express");
var mongojs = require("mongojs");

var app = express();

var databaseUrl = "zoo";
var collections = ["animals"];

var db = mongojs(databaseUrl, collections);

db.on("error", function (error) {
  console.log("Database Error:", error);
});

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/all", function (req, res) {
  db.animals.find({}, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// TODO: Implement the remaining two routes

// 1: Name: Send JSON response sorted by name in ascending order, e.g. GET "/name"
app.get("/name", function (req, res) {
  db.animals.find().sort({ name: 1 }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      var animalName = [];
      for (i = 0; i < data.length; i++) {
        animalName.push({
          animal: data[i].name,
          name: data[i].whatIWouldReallyCallIt
        });
      }
      res.json(animalName);
    }
  });
});


// 2: WeightDECREMENT: Send JSON response sorted by weight in descending order, , e.g. GET "/weight"
app.get("/weight-d", function (req, res) {
  db.animals.find().sort({ weight: -1 }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      var animalWeight = [];
      for (i = 0; i < data.length; i++) {
        animalWeight.push({
          animal: data[i].name,
          name: data[i].whatIWouldReallyCallIt,
          weight: data[i].weight
        });
      }
      res.json(animalWeight);
    }
  });
});

// 2: WeightINCREMENT: Send JSON response sorted by weight in INCREMENTING order, , e.g. GET "/weight"
app.get("/weight-i", function (req, res) {
  db.animals.find().sort({ weight: 1 }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      var animalWeight = [];
      for (i = 0; i < data.length; i++) {
        animalWeight.push({
          animal: data[i].name,
          name: data[i].whatIWouldReallyCallIt,
          weight: data[i].weight
        });
      }
      res.json(animalWeight);
    }
  });
});

//playin around 
app.get("/zooAnimals", function (req, res) {
  db.animals.find({}, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      var zooAnimals = [];
      for (i = 0; i < data.length; i++) {
        zooAnimals.push({
          name: data[i].whatIWouldReallyCallIt,
          animal: data[i].name,
          type: data[i].class,
          legs: data[i].numLegs,
          weight: data[i].weight
        });
      }
      res.json(zooAnimals);
    }
  });
});

// Set the app to listen on port 3000
app.listen(3000, function () {
  console.log("App running on port 3000!");
});
