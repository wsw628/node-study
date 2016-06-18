/**
 * http://usejsdoc.org/
 */
var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {'Conten-Type':'text/html'});
	response.end('<h1>Test - File - 2</h1>');
}).listen(52273, function () {
	console.log('Server Running at http://127.0.0.1:52273');
});