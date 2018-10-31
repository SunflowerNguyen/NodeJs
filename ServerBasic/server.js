var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("run done!");
});

server.listen(5197, '127.0.0.1');
console.log('Server running with port 5197');