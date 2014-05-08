var server = require('connect');
var logger = require('morgan');
var fs = require('fs');
var CONSTANTS = require('./constants');
var self_modules = require('./modules');

server()
.use(logger({stream: fs.createWriteStream('./server.log', {'flags': 'a'})}))
.use(logger('dev'))
.use(self_modules.test)
.listen(CONSTANTS.port, function () {
  console.log("server is running at port " + CONSTANTS.port);
});