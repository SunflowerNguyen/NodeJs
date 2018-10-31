var file = require('fs');

// remove file by unlink
file.unlink('test.txt');
console.log('remove file successfully!');

// create folder
file.mkdirSync('folderTests');
console.log('created folder');

// remove folder
file.rmdirSync('folderTests');
console.log('removed folder');