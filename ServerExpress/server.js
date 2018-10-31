var express = require('express');
var app = express();

// import controller
var controller = require('./controllers/mainController.js');

// setup tempalte engine ejs
app.set('view engine', 'ejs');

// setup static files css and image
app.use('/assets', express.static('./public'));

// execute controller
controller.Controller(app);

// listen port 
app.listen(5197);
console.log('Server running port 5197');