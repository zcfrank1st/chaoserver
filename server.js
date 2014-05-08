var server = require('connect');
var logger = require('morgan');
var CONSTANTS = require('./constants');
var self_modules = require('./modules');

server()
.use(logger('dev'))
.use(self_modules.test)
.listen(CONSTANTS.port, function () {
  console.log("server is running at port " + CONSTANTS.port);
});