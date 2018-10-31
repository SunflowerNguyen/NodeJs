var test = require('./module.js');

console.log("this is app");
// type 1
console.log(test.dem1([1, 2, 4]));
console.log(test.tinh1(1, 2));
console.log(test.chao1());

// type 2
console.log(test.testDem([1, 2]));
console.log(test.testTinh(3, 4));

// type 3
// console.log(test.name1([1, 2, 3, 5, 7]));
// console.log(test.name2(6, 7));