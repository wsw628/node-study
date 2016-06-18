/**
 * http://usejsdoc.org/
 */
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request, response) {
	fs.readFile('ejsPage2.ejs', 'utf8', function(error, data){
		response.writeHead(200, {'Content-Type':'text/html'});
		console.log(data);
		response.end(ejs.render(data, {
			name : 'RintaIanTta',
			description : 'Hello ejs With Node.js'
		}));
	});
}).listen(52273, function () {
	console.log ('Server Running at http://127.0.0.1:52273');
});