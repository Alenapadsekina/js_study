var bodyParser = require('body-parser');

var data = [{team: ''}, {team: 'Main releases'}, {team: 'HTML5/IFE'}, {team: 'CBC'}];

//var urlencodedParser = bodyParser.urlencodedParser({extended: false});

module.exports = function(index){

  index.get('/employees', function(req, res){
    res.render('teams', {teams: data});
  });

  //index.post('/teams', urlencodedParser, function(req, res){

  //});
  index.delete('/teams', function(req, res){

  });

};
