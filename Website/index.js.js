var express = require("express");
var index = express();
var server = require("./server.js");

index.set('view engine', 'ejs');
index.use('/assets', express.static('assets'));
index.get('', function(req, res) {
	res.render('index');
});
