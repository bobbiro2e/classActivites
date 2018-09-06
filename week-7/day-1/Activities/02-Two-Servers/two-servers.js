var http = require("http");

const server1 = http.createServer(function (request, response) {
    response.end("YAY!");
});

const server2 = http.createServer(function (request, response) {
    response.end("no...");
});

server1.listen(7002, function () {
    console.log("listening on 7001...")
});

server2.listen(7502, function () {
    console.log("listening on 7501...")
});

