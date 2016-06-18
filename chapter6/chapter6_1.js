var http = require('http');

// var server = http.createServer();

var server = http.createServer(function (request, response) {
	console.log('test1');
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hello World .. !</h1>');
});

//server.on('request', function() {
//	console.log('Request On');
//});
//
//server.on('connection', function() {
//	console.log('Connection On');
//});
//
//server.on('close', function() {
//	console.log('Close On');
//});

//console.log (server.on('request', function() {
//	console.log('Request On');
//}));

server.on('request', function() {
	console.log('Request On');
}).on('connection', function() {
	console.log('Connection On');
}).on('close', function() {
	console.log('Close On');
});



//server.listen(52273, function() {
//	console.log('Server Running at http://127.0.0.1:52273');
//});

server.listen(8080, function() {
	console.log('Server Running at http://127.0.0.1:8080');
});

//setInterval(function() {
//	console.log('exit');
//	server.close();
//}, 10000);