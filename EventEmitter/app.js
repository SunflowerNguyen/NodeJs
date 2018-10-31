// import modules 'vents'
var event = require('events');
var mainfunction = require('util');

// Create Emitter basic
var test = new event.EventEmitter();

test.on('something', function(msg) {
    console.log(msg);
});

test.emit('something', 'Hello guy, How are you doing?');

// create Emitter advanced

var Person = function(name) {
    this.name = name;
}

mainfunction.inherits(Person, event.EventEmitter);

var sunflower = new Person('Sunflower');
var sunflower1 = new Person('Sunflower1');

var arrayPeople = [sunflower, sunflower1];

arrayPeople.forEach(function(person) {
    person.on('talk', function(msg) {
        console.log(person.name + ' said that : ' + msg);
    });
});

sunflower.emit('talk', 'hello guy, I am new member and hope everyone will help me.');