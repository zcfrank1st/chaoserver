var EventEmitter = require('events').EventEmitter;
var util = require("util"); 

var TTransports = require('thrift/transport');
var TProtocols = require('thrift/protocol');
var TCLIService = require('../thrift/gen-nodejs/TCLIService.js');

// config
var host = 'localhost';
var port = '';

// thrift init
var socket = TTransports.Tsocket(host, port);
var transport = TTransports.TBufferedTransport(socket);
var protocol = TProtocols.TBinaryProtocol(transport);
var client = TCLIService.Client(protocol);
transport.open();

// hive类
function Hive() {
}
util.inherits(Hive, EventEmitter);

Hive.prototype.query = function (sql) {
  var self = this;
  
  self.on('done', function () {
    // TODO 调用某些方法进行数据的处理
  });
  
  client.ExecuteStatement(sql, function (err, res) {
    if (err) {
      // TODO 处理错误
    } else {
      self.emit('done', res);
    }
  });
};

// TODO hive method

module.exports = Hive;
