var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/login', function(req, res){
  res.sendFile(__dirname + '/login.html');
});
io.on('connection', function(socket){
	socket.on('chat message', function(msg,login,mdp){
		console.log(login);
		console.log(msg);
		if(login == "rey@gmail.com" && mdp == "mdp"){
			
			io.emit('chat message',utilisateur + ' : ' +msg);
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
