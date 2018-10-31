var http = require('http');
var file = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Link : ' + req.url);
    if (req.url === '/') {
        res.writeHead(200, { 'ContentType': 'text/html' });
        file.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    } else if (req.url === '/login') {
        res.writeHead(200, { 'ContentType': 'text/plain' });
        res.end('This is page login');
    } else if (req.url === '/json') {
        res.writeHead(200, { 'ContentType': 'application/json' });
        var data = {
            name: 'Sunflower',
            job: 'Developer'
        }
        res.end(JSON.stringify(data));
    }
});

server.listen(5197, '127.0.0.1');
console.log('Server running with port 5197');