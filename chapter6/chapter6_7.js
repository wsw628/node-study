/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
	console.log (request.query);
	var pathname = url.parse(request.url).pathname;
	
	console.log(pathname);
	if (pathname == '/') {
		fs.readFile('HTMLPage.html', function(error, data){
			response.writeHeader(200, {'Content-Type':'text/html'});
			response.end(data);
		}); 
	} else if (pathname == '/suji') {
		fs.readFile('seul.jpg', function(error, data){
			response.writeHeader(200, {'Content-Type':'image/jpg'});
			response.end(data);
		})
	};
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273');
});
