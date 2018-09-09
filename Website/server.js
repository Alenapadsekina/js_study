var fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {

	console.log('request was made: ' + req.url);

	if(req.url === '/') {

	res.writeHead(200, [{'Content-Type' : 'text/html'}, {'Content-Type' : 'text/css'}, {'Content-Type' : 'text/javascript'}]);

	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);

	} else {

		res.writeHead(400, {'Content-Type' : 'text/html'});

		var myReadStream = fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);

	}



}).listen(8888, () => console.log("Server has started."));

var crews = JSON.parse(fs.readFileSync('/views/teams.json', 'utf8'));
module.exports.server = server;
module.exports.crews = crews;






/*

fs.readFile('index.html', (err, data) => {
  if (err) throw err;
  var arr = data.toString();
  arr = JSON.parse(arr);
  console.log(arr);
});
*/
