/* var http = require('http');
var server = http.createServer(function(req, res) 
{
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<!DOCTYPE html>'
    +'<html><head>'
    +'<meta-chareset="UTF-8"/>'
    +'<title>Mon super titre </title>'
    +'<h1>Hello WOrld</h1>'
    +'</body></html>')
    res.end();
});
server.listen(8000);

 */

var express = require('express');
var app=express();
var bodyParser = require ('body-parser');
var router=require('./server/router');

app.use("/", router);

app.listen(8000);
