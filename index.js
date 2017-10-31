var http = require('http');
var date=require('./module.js');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Time is :"+date.myDateTime());
    res.end('Hello World!');
}).listen(8080);