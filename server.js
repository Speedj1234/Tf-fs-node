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
var animalRouter=require('./server/Routers/animal_router');
var actorRouter=require('./server/Routers/actors_router');
var filmRouter=require('./server/Routers/films_router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use("/api/animals", animalRouter);
app.use("/api/movies/actors", actorRouter);
app.use("/api/movies/films", filmRouter);



app.listen(8000);
