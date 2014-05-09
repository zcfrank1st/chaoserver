var server = require('connect');
var logger = require('morgan');
var fs = require('fs');
var serveStatic = require('serve-static');

var CONSTANTS = require('./constants');
var self_modules = require('./modules');


var host = CONSTANTS.ip || '0.0.0.0';

server()
// init
.use(logger({stream: fs.createWriteStream('./server.log', {'flags': 'a'})}))
.use(logger('dev'))
.use(serveStatic(CONSTANTS.webroot, {'index':['index.html']}))
// Restful
.use('/me', self_modules.test)
.use('/me2', self_modules.test2)
// default page
.use(self_modules.defultRoute)
// listen port and ip
.listen(CONSTANTS.port, host, function () {
  console.log("server is running at port " + CONSTANTS.port);
});
