
var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
    if (request.url == "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Hello World</h1>");
        response.write("<html><body> <h1>Hello World</h1>This is home Page! URL was: " + request.url + "</body></html>");
    } else if (request.url == "/student") {
        fs.readFile("Registration form (2).html", function (err, data) {
            if (err) {
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url == "/admin") {
        fs.readFile("cgpa1.html", function (err, data) {
            if (err) {
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data);
                response.end();
            }
        });
    } else {
        response.writeHead(404);
        response.end("Invalid Request");
    }
});

server.listen(3000);

console.log("Server running");