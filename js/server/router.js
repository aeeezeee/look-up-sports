'use strict';

function route(pathname, handle, response, request){
    if(typeof handle[pathname] === 'function'){
        console.log(`Routing a request for ${pathname}`);
        handle[pathname](response, request);
    } else {
        console.log("No handler found for: " + pathname);
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('<h1>404 Page not found.</h1>');
        response.end();
    }
}

exports.route = route;