var Controller = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });
}

module.exports.Controller = Controller;