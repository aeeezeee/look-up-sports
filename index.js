'use strict';

var server = require('./js/server/server');
var router = require('./js/server/router');
var handlers = require('./js/server/handler');

var handle = {};

handle['/'] = handlers.reqHTML;
handle['/CSS'] = handlers.reqCSS;
handle['/JS'] = handlers.reqScriptJS;

server.startServer(router.route, handle);