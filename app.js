var server = require('./server');
var plugins = require('./plugins');

server()
  .rest('GET', '/me', function () { return "helo"; })
  .rest('GET', '/test2', function () {return '111';})
  .plus(plugins.defaultRoute())
  .run();