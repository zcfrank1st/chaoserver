var server = require('connect');
var logger = require('morgan');
var fs = require('fs');
var serveStatic = require('serve-static');
var merge = require('utils-merge');
var options = require('./options');

var s = server();
var traits = {};

traits.rest = function rest(method, path, fn) {
  // TODO 处理method
  s.use(path, fn);
  return s;
};

traits.plus = function plus(fn) {
  s.use(fn);
  return s;
};

traits.run = function run() {
  var port = options.port || 3000;
  var hostname = options.hostname || '';

  if ('' === hostname) {
    s.listen(port, function () {
      console.log('chaoserver is running on port ' + port);
    });
  } else {
    s.listen(port, hostname, function () {
      console.log('chaoserver is running on port ' + port);
    });
  }
};

module.exports = chaoserver;

function chaoserver() {
  var logPath = options.logPath || './server.log';
  var webRoot = options.webRoot || './webapp';
  var indexPage = options.indexPage || 'index.html' ;

  merge(s, traits);

  return s
    .use(logger({
      stream: fs.createWriteStream(logPath, {
        'flags': 'a'
      })
    }))
    .use(logger('dev'))
    .use(serveStatic(webRoot, {
      'index': [indexPage]
    }));
}