var http = require('http');
var file = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, 'text/html');
    var readFile = file.createReadStream(__dirname + '/index.html', { encoding: 'utf8' });
    readFile.pipe(res)
});

server.listen(5197, '127.0.0.1');
console.log('Server running with port 5197');