'use strict';

var http = require('http');
var url = require('url');
const PORT = 80;

function startServer(route, handle){
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log(`About to route a request for ${pathname}`);
        route(pathname, handle, response, request);
    }).listen(PORT);
    
    console.log(`Listenning to port ${PORT}...`);
}

exports.startServer = startServer;