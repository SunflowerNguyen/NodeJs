// function express

var dem = function(arrayMang) {
    return "There are " + arrayMang.length + " element in array";
}

var tinh = function(a, b) {
    return `Sum is ${ a + b }`;
}

var chao = function() {
    return "Hello chao";
}

// Type 1 | module.exports.{name you want export} = name function express
module.exports.dem1 = dem;
module.exports.tinh1 = tinh;
module.exports.chao1 = chao;

// Type 2 | module.exports.{name you want export} = normal function
module.exports.testDem = function(arrayMang) {
    return "There are " + arrayMang.length + " element in array";
}
module.exports.testTinh = function(a, b) {
    return `Sum is ${ a + b }`;
}

// Type 3 
// module.exports = {
//     name1: dem,
//     name2: tinh,
//     name3: chao
// }