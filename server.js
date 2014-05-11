var server = require('connect');
var logger = require('morgan');
var fs = require('fs');
var serveStatic = require('serve-static');
var merge = require('utils-merge');
var options = require('./options');

var opt, webRoot, logPath, indexPage, port, hostname;

var s = server();
var traits = {};

traits.rest = function rest(method, path, fn) {
  function innerHandler (req , res) {
    if (method === req.method){
      res.end(fn());
    } else {
      throw (new Error('please check the request method!'));
    }
  }
  // TODO 处理method 判断是否为get或者post请求
  s.use(path, innerHandler);
  return s;
};

traits.plus = function plus(fn) {
  s.use(fn);
  return s;
};

traits.run = function run() {
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

function chaoserver(opt) {
  opt = opt || {};
  logPath = opt.logPath || options.logPath;
  webRoot = opt.webRoot || options.webRoot;
  indexPage = opt.indexPage || options.indexPage ;
  port = opt.port || options.port;
  hostname = opt.hostname || options.hostname;
  
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