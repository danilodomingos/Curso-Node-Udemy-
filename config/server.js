let express = require('express');
let consign = require('consign')
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');


let app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
    .include('./app/routes')
    .then('./app/repository')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;
