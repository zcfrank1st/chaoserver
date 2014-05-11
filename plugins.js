var fs = require('fs');
var options = require('./options');

var plugins = module.exports;

plugins.defaultRoute = function defaultRoute(webRoot) {
  var webRoot = webRoot || options.webRoot;
  return function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.readFile(options.webRoot + '/index.html', function (err, data) {
      res.end(data);
    });
  }
};