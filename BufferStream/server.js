var file = require('fs');

// { encoding: 'utf8' } is buffer
var readStream = file.createReadStream(__dirname + '/readMe.txt', { encoding: 'utf8' });
var writeStream = file.createWriteStream(__dirname + '/write.txt');
readStream.on('data', function(chunk) {
    console.log('write stream');
    writeStream.write(chunk);
});