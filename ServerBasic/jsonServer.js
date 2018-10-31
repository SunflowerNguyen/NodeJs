var http = require('http');
var file = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'ContentType': 'application/json' });
    var data = {
        name: 'Sunflower',
        job: 'Developer'
    }
    res.end(JSON.stringify(data));
});

server.listen(5197, '127.0.0.1');
console.log('Server running with port 5197');