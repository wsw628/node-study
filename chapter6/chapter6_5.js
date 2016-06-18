/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
	fs.readFile('suji.jpg', function (error, data) {
		response.writeHead(200, {'Content-Type' : 'image/jpeg'});
		response.end(data);
	});
}).listen(8009, function (){
	console.log('suji');
});