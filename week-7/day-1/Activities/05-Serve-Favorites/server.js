const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

        case "/":
            return displayRoot(path, req, res);

        case "/foods":
            return displayFoods(path, req, res);

        case "/movies":
            return displayMovies(path, req, res);

        case "/favcss":
            return displayFavcss(path, req, res);

        default:
            return display404(path, req, res);
    }
}

function displayRoot(url, req, res) {
    fs.readFile(__dirname + "/index.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFoods(url, req, res) {
    fs.readFile(__dirname + "/foods.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayMovies(url, req, res) {
    fs.readFile(__dirname + "/movies.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFavcss(url, req, res) {
    fs.readFile(__dirname + "/favcss.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(url, req, res) {
    fs.readFile(__dirname + "/404.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}
