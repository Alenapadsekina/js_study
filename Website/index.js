var express = require('express');
var index = express();
var teamsController = require('./controllers/teamsController');
//var server = require("./server.js");

index.set('view engine', 'ejs');

index.use('/public', express.static('public'));



index.listen(8888);
console.log('Listen to port 8888');

teamsController(index);
