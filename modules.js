var fs = require('fs');
var CONSTANTS = require('./constants');
var service = require('./services');

var self_modules = module.exports;

self_modules.test = function (req, res) {
  console.log(req.method);
  res.end();
};

self_modules.test2 = function (req, res) {
  console.log(req);
  res.end();
};

self_modules.defultRoute = function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  fs.readFile(CONSTANTS.webroot + 'index.html', function (err, data) {
    res.end(data);
  });
};