var express = require('express');

var app = express();
var homeRouter = require('./routes/home.js');

app.set('view engine', 'ejs');

app.use('/assets', express.static('./public'));

// check middleware authoried
app.use((req, res, next) => {
    if (!req.headers.authorABC) {
        return res.json(401, "authoried");
    }
    next();
});

app.use('/', homeRouter);

app.listen(5197, () => {
    console.log(`Server started on port 3000`);
});