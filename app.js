var server = require('./server');
var plugins = require('./plugins');

server()
  .rest('GET', '/test', function (req, res) { res.end('hello'); })
  .rest('POST', '/test2', function (req, res) { res.end('hello2'); })
  .plus(plugins.defaultRoute)
  .run();