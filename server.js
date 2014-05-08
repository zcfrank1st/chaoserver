var server = require('connect');
var logger = require('morgan');
var fs = require('fs');
var serveStatic = require('serve-static');

var CONSTANTS = require('./constants');
var self_modules = require('./modules');


var host = CONSTANTS.ip || '0.0.0.0';


// TODO 增加方法请求处理
server()
.use(logger({stream: fs.createWriteStream('./server.log', {'flags': 'a'})}))
.use(logger('dev'))
.use(serveStatic(CONSTANTS.webroot, {'index':['index.html']}))
.use('/me', self_modules.test)
.listen(CONSTANTS.port, host, function () {
  console.log("server is running at port " + CONSTANTS.port);
});
