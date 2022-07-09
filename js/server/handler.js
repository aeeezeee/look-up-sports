'use strict';

var fs = require('fs');

function reqHTML(response, request){
    fs.readFile('./html/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            response.writeHead(404, {'Content-Type' : 'text/plain'});
            response.write('Error reading file "index.html"');
            response.end();
            console.log('Failed to read "index.html" file');
        } else {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(data);
            response.end();
            console.log('Request handler "html" was called.');
        }
        });
}

function reqCSS(response, request){
    fs.readFile('./css/styles.css', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            response.writeHead(404, {'Content-Type' : 'text/plain'});
            response.write('Error reading file "style.css"');
            response.end();
            console.log('Failed to read "style.css" file');
        } else {
            response.writeHead(200, {'Content-Type' : 'text/css'});
            response.write(data);
            response.end();
            console.log('Request handler "css" was called.');
        }
        });
}

function reqScriptJS(response, request){
    fs.readFile('./js/client/script.js', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            response.writeHead(404, {'Content-Type' : 'text/plain'});
            response.write('Error reading file "script.js"');
            response.end();
            console.log('Failed to read "script.js" file');
        } else {
            response.writeHead(200, {'Content-Type' : 'text/javascript'});
            response.write(data);
            response.end();
            console.log('Request handler "js" was called.');
        }
        });
    
}

exports.reqHTML = reqHTML;
exports.reqCSS = reqCSS;
exports.reqScriptJS = reqScriptJS;