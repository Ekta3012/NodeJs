var http = require('http');
var fs = require('fs'); //file system module
var url=require('url');
var date=require('./module.js');
http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.write("Time is :"+date.myDateTime());
    //res.end('Hello World!');
    /*fs.readFile('index.html',function(err,data){    //read file
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data+date.myDateTime());
        res.end();
    });*/
    var q=url.parse(req.url,true);
    var filename="."+q.pathname;
    fs.readFile(filename,function(err,data){
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();

    });
}).listen(8080);