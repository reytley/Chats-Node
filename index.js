/////////////////////////////////////////////////////
/////////////////VAR BASE SERVER/////////////////////
/////////////////////////////////////////////////////
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

/////////////////////////////////////////////////////
////////////SYSTEME ROUTE DU SERVER//////////////////
/////////////////////////////////////////////////////
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/login', function(req, res){
  res.sendFile(__dirname + '/login.html');
});
/////////////////////////////////////////////////////
///////////////SYSTEME SOCKET.IO/////////////////////
/////////////////////////////////////////////////////
io.on('connection', function(socket){

	//RECEPTION DE MESSAGE -- Demande de login est mdp si connu dans la bdd alors afficher le msg dans le tchat room 
	socket.on('chat message', function(msg,login,mdp){
		console.log(login);
		console.log(msg);
		if(login == "rey@gmail.com" && mdp == "mdp"){
			var msg =   login + ' : ' +msg;
			io.emit('chat message', msg );
		}
	});

	socket.on('login', function(login,mdp){
	console.log(login);
	var verif = false;
	//Futur demande si utilisateur Existe
	if(login == "rey@gmail.com" && mdp == "mdp"){
		verif = true ;
		console.log("ConnexOk");
	}
	io.emit('login',verif,login,mdp);
	});
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
