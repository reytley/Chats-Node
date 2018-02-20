//jJVicPjsWenQvPgJ

var app = require('express')();
var http = require('http').Server(app);

var port = process.env.PORT || 3000;
const express = require('express');
var model = require('./app/model');
var route = require('./app/route');
var controller = require('./app/controller');

//DEPENDANCE
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


//CONNEXION BDD
model.connex();

 model.test();
route.route(app);
controller.controller(http);

http.listen(port, function(){
  console.log('listening on *:' + port);
});
