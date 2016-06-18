/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
	
	if (request.method == 'GET') {
		fs.readFile('HTMLPage.html', function(error, data){
			response.writeHeader(200, {'Content-Type':'text/html'});
			response.end(data);
		}); 
	} else if (request.method == 'POST') {
		
		request.setEncoding('utf8');
		request.on('data', function (data){
			console.log(data);
			
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end('<h1>' + data + '</h1>');
		});
//		fs.readFile('seul.jpg', function(error, data){
//			response.writeHeader(200, {'Content-Type':'image/jpg'});
//			response.end(data);
//		})
	};
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273');
});
