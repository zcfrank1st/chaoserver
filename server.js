var server = require('connect');
var constants = require('./constants');
var self_modules = require('./modules');

server()
.use(self_modules.test)
.listen(constants.port, function () {
  console.log("server is running at port " + constants.port);
});