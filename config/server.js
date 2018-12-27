let express = require('express');
let consign = require('consign')
let bodyParser = require('body-parser');


let app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views')

app.use(bodyParser.urlencoded({extended: true}))

consign()
    .include('./app/routes')
    .then('config/dbConnection.js')
    .then('app/repository')
    .into(app);

module.exports = app;
