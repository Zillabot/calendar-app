var knexConfig = require('./knexfile');
var knex = require('knex')(knexConfig);
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var logger = require('morgan');

var app = express();
module.exports = app;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/calendar.html'));
// });

app.put('/', function (req, res) {
    res.end(JSON.stringify({}));
});

app.listen(3000, function () {
    console.log("server started");
});
