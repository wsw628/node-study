var http = require('http');

var server = http.createServer(function (request, response) {
	console.log('test');
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hello World ..QQ!!!</h1>');
});

var server2 = http.createServer(function (request, response) {
	console.log('test');
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hello World Server2..QQ!!!</h1>');
});

server.listen(52275, function(){
	console.log("server port1");
});

server.listen(52276, function(){
	console.log("server port2");
});

console.log('test2');