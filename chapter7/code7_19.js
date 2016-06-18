/**
 * http://usejsdoc.org/
 */

var http = require('http');
var jade = require('jade');
var fs = require('fs');

http.createServer(function (request, response){
	fs.readFile('jadePage3.jade', 'utf8', function(error, data){
		var fn = jade.compile(data);
		console.log(fn);
		console.log(fn());
		
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end(fn({
			name : 'RintIanTta',
			description : 'Hello ejs With Node.js'
		}));
	});
}).listen(52273, function (){
	console.log('Server Running at http://120.0.0.1:52273');
});