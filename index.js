

//jJVicPjsWenQvPgJ

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
const express = require('express');

app.use("/vendor/bootstrap/css/bootstrap.min.css", express.static(__dirname + '/vendor/bootstrap/css/bootstrap.min.css'));
app.use("/vendor/font-awesome/css/font-awesome.min.css", express.static(__dirname + '/vendor/font-awesome/css/font-awesome.min.css'));
app.use("/dist/css/sb-admin-2.css", express.static(__dirname + '/dist/css/sb-admin-2.css'));
app.use("/dist/css/customTchat.css", express.static(__dirname + '/dist/css/customTchat.css'));
app.use("/vendor/metisMenu/metisMenu.min.css", express.static(__dirname + '/vendor/metisMenu/metisMenu.min.css'));

app.use("/vendor/jquery/jquery.min.js", express.static(__dirname + '/vendor/jquery/jquery.min.js'));
app.use("/vendor/bootstrap/js/bootstrap.min.js", express.static(__dirname + '/vendor/bootstrap/js/bootstrap.min.js'));
app.use("/vendor/metisMenu/metisMenu.min.js", express.static(__dirname + '/vendor/metisMenu/metisMenu.min.js'));
app.use("/dist/js/sb-admin-2.js", express.static(__dirname + '/dist/js/sb-admin-2.js'));
app.use(express.static(__dirname + '/views'));



/////////////////////////////////////////////////////
////////////SYSTEME ROUTE DU SERVER//////////////////
/////////////////////////////////////////////////////
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
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
/////////////////////////////////////////////////////
///////////////SYSTEME SOCKET.IO/////////////////////
/////////////////////////////////////////////////////
io.on('connection', function(socket){

	//RECEPTION DE MESSAGE -- Demande de login est mdp si connu dans la bdd alors afficher le msg dans le tchat room 
	socket.on('chat message', function(msg,login,mdp){
		console.log(login);
		console.log(msg);
		if(login == "rey@gmail.com" && mdp == "mdp"){
			io.emit('chat message', msg,login );
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
