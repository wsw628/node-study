/**
 * http://usejsdoc.org/
 */
var http = require('http');

http.createServer(function(request, response){
	if (request.url == '/') {
		response.writeHead(200, {'Conten-Type':'text/html'});
		response.write('<!DOCTYPE html>');
		response.write('<html>');
		response.write('<head>');
		response.write('	<title>Forever</title>');
		response.write('</head>');
		response.write('<body>');
		response.write('	<h1>Forever</h1>');
		response.write('</body>');
		response.write('</html>');
		response.end();
		//response.end('<h1>Test - File - 2</h1>');
		
	} else {
		//console.log(error);
		// error 내장객체인가? 아니네 그냥 아무런 의미없는 undefined  ㅋ
		error.error.error();
	}
}).listen(52273, function () {
	console.log('Server Running at http://127.0.0.1:52273');
});