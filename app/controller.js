
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////SYSTEME SOCKET.IO//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var controller = function(http) {
var io = require('socket.io')(http);

io.on('connection', function(socket){

	//RECEPTION DE MESSAGE -- Demande de login est mdp si connu dans la bdd alors afficher le msg dans le tchat room 
	socket.on('chat message', function(msg,login,mdp){
		console.log(login);
		console.log(msg);
		if(login == "rey@gmail.com" && mdp == "mdp" || login == "bibi@gmail.com" && mdp == "mdp"){
			io.emit('chat message', msg,login );
		}
	});

	socket.on('login', function(login,mdp){
	console.log(login);
	var verif = false;
	//Futur demande si utilisateur Existe
	if(login == "rey@gmail.com" && mdp == "mdp" || login == "bibi@gmail.com" && mdp == "mdp"){
		verif = true ;
		console.log("ConnexOk");
	}
	io.emit('login',verif,login,mdp);
	});
});

}

exports.controller = controller;