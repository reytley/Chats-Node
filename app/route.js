///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////SYSTEME ROUTE DU SERVER///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var route = function(app) { 
	app.get('/', function(req, res){
	  res.sendFile(__dirname + '/login.html');
	});
	app.get('/login', function(req, res){
	  res.sendFile(__dirname + '/login.html');
	});

	app.get('/forms', function(req, res){
	  res.sendFile(__dirname + '/forms.html');
	});

	app.get('/chat', function(req, res){
	  res.sendFile(__dirname + '/chat.html');
	});
}
exports.route = route;