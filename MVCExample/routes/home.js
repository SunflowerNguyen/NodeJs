var express = require('express');
var router = express.Router();

var HomeController = require('./../controllers/homeController.js');



router.get('/', HomeController.home);


module.exports = router;