var http = require('http');
var server = http.createServer(function(req,res) {
	res.writeHead(200);
	res.end('Hello World\n');
});

server.on('connection', function() {
	console.log('Connected');
})

server.listen(1337);

console.log('Node started on 1337');