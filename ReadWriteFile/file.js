var file = require('fs');
// sync | (nameFile , type)
var readFile = file.readFileSync('read.txt', 'utf8');
console.log(readFile);
var writeFile = file.writeFileSync('write.txt', 'content write file');
console.log('writed file');

// async | (nameFile , type , functionCallback)
var readFileNot = file.readFile('write.txt', 'utf8', function(err, data) {
    if (err) return console.log('failure');
    console.log('Yes : ' + data);
});