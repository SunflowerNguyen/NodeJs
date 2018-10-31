var http = require('http');
var file = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var readStream = file.createReadStream(__dirname + '/readMe.txt', { encoding: 'utf8' });
    readStream.pipe(res);
});

server.listen(5197, '127.0.0.1');
console.log('Server running with port 5197!');