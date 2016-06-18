var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
	fs.readFile('HTMLPage.html', function (error, data) {
		//response.writeHead(200, {'Content-Type':'text/html'});
		var date = new Date();
		date.setDate(date.getDate() + 7);
		
		//response.writeHead(200, {
		//			'Content-Type':'text/html',
		//			'Set-Cookie':['breakfast = toast;Expires = ' + date.toUTCString(), 'dinner = chicken']});

		//response.writeHead(301, {'Location': 'http://www.naver.com'});
		response.writeHead(404);
		response.end();
		console.log (data);
		//response.end(data);
		//response.end('<h1>' + response.headers.cookie + '</h1>');
	});
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

fs.readFile('HTMLPage.html', 'utf8', function (error, data) {
	console.log (data);
	// 왜 Buffer ....로 뜨지?? - utf8 인코딩  
});