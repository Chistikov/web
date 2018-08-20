var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'siteDB'
});

connection.connect(function(){
	if(!error){
		console.log('error');
	} else {
		console.log('All ok!');
	}
});