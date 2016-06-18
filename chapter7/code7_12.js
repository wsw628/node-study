/**
 * http://usejsdoc.org/
 */

var http = require('http');
var jade = require('jade');
var fs = require('fs');

http.createServer(function (request, response){
	//fs.readFile('jadePage.jade', 'utf8', function(error, data){
	fs.readFile('jadePage2.jade', 'utf8', function(error, data){
		var fn = jade.compile(data);
		console.log(fn);
		console.log(fn());
		
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end(fn());
	});
}).listen(52273, function (){
	console.log('Server Running at http://120.0.0.1:52273');
});