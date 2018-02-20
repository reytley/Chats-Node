
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////MODEL CONNEX BDD///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'chat',
	 
	});
var connex = function() { 
	
	

	connection.connect(function(err) {
	  if (err) {
	    return console.error('error: ' + err.message);
	  }
	 
	  console.log('Connected to the MySQL server.');
	});



}
exports.connex = connex;


var test = function(){

	
    var email = '"reytley@gmail.com"'
     var requete = 'SELECT * from utilisateur  where email = ' + email;
      console.log(requete);
	connection.query( requete , function(err, rows, fields) {
	connection.end();
	  if (!err)
	    console.log('The solution is: ', rows);
	  else
	    console.log('Error while performing Query.');
	  });

}
exports.test = test;


