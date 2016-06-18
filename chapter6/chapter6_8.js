/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
	console.log (request.url);
	console.log (url.parse(request.url));
	console.log (url.parse(request.url, true));
	var query = url.parse(request.url).query;
	
	response.writeHeader(200, {'Content-Type':'text/html'});
	//response.end('<h1>' + JSON.stringify(query) + '</h1>');
	response.end('<h1>' + query + '</h1>');
	 
	
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273');
});
